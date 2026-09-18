"""
Paradise Kiss — Streamlit wrapper
----------------------------------------------------------------
Streamlit doesn't serve a folder of static HTML/CSS/JS/images the
way a normal web host does, so this script:

  1. Reads index.html, css/style.css, js/data.js, js/script.js
  2. Inlines the CSS and JS directly into the HTML
  3. Converts any character images that exist in
     images/characters/ into base64 data URIs, so they render
     even though Streamlit Cloud won't serve that folder as
     static files
  4. Renders the whole thing in an embedded iframe via
     streamlit.components.v1.html

Place this file at the ROOT of the repo, next to index.html,
css/, js/, and images/ (same layout as the rest of the project).

requirements.txt only needs one line:
    streamlit
"""

import base64
import mimetypes
import re
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Paradise Kiss — A Lookbook", layout="wide")

BASE_DIR = Path(__file__).parent


def inline_character_images(js_text: str) -> str:
    """
    Replace every 'images/characters/xxx.ext' path found inside data.js
    with a base64 data URI, so the images survive being embedded in the
    iframe. If a file hasn't been added yet, the original path is left
    as-is — the page's own onerror fallback then shows the monogram
    placeholder, same as it does when opened as a normal static site.
    """
    pattern = re.compile(r"images/characters/[\w\-.]+")

    def replace(match: re.Match) -> str:
        rel_path = match.group(0)
        file_path = BASE_DIR / rel_path
        if not file_path.exists():
            return rel_path
        mime_type, _ = mimetypes.guess_type(str(file_path))
        mime_type = mime_type or "image/jpeg"
        encoded = base64.b64encode(file_path.read_bytes()).decode("utf-8")
        return f"data:{mime_type};base64,{encoded}"

    return pattern.sub(replace, js_text)


def build_page_html() -> str:
    html = (BASE_DIR / "index.html").read_text(encoding="utf-8")
    css = (BASE_DIR / "css" / "style.css").read_text(encoding="utf-8")
    data_js = inline_character_images(
        (BASE_DIR / "js" / "data.js").read_text(encoding="utf-8")
    )
    script_js = (BASE_DIR / "js" / "script.js").read_text(encoding="utf-8")

    html = html.replace(
        '<link rel="stylesheet" href="css/style.css">',
        f"<style>\n{css}\n</style>",
    )
    html = html.replace(
        '<script src="js/data.js"></script>',
        f"<script>\n{data_js}\n</script>",
    )
    html = html.replace(
        '<script src="js/script.js"></script>',
        f"<script>\n{script_js}\n</script>",
    )
    return html


components.html(build_page_html(), height=2400, scrolling=True)
