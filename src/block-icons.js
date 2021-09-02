/**
 * Block icons
 */

const svgIcon = wp.element.createElement

const ResponsiveBlockEditorAddonsIcons = {
    accordion: svgIcon("svg", {width: 20, height:20},
        svgIcon("path", {fill: "#ff6f61", d: "M2 19h16c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm13 0v2H6V3h11zM4 7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm13 0v2H6V7h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm13 0v2H6v-2h11zM4 15c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm13 0v2H6v-2h11z"})
    ),
    accordion_item: svgIcon("svg", {width: 20, height:20},
        svgIcon("path", {fill: "#ff6f61", d: "M2 19h16c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm13 0v2H6V3h11zM4 7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm13 0v2H6V7h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm13 0v2H6v-2h11zM4 15c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm13 0v2H6v-2h11z"})
    ),
    advance_columns: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M2 2h5v11H2V2zm6 0h5v5H8V2zm6 0h4v16h-4V2zM8 8h5v5H8V8zm-6 6h11v4H2v-4z"})
    ),
    column: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M2 2h5v11H2V2zm6 0h5v5H8V2zm6 0h4v16h-4V2zM8 8h5v5H8V8zm-6 6h11v4H2v-4z"})
    ),
    advanced_heading: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M9 7v10h2v-4h2v4h2V7h-2v4h-2V7H9M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"})
    ),
    anchor: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M4.34 15.66A7.97 7.97 0 0 0 9 17.94V10H5V8h4V5.83a3 3 0 1 1 2 0V8h4v2h-4v7.94a7.97 7.97 0 0 0 4.66-2.28l-1.42-1.42h5.66l-2.83 2.83a10 10 0 0 1-14.14 0L.1 14.24h5.66l-1.42 1.42zM10 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"})
	),
    block_importer: svgIcon("svg", {width: 20, height: 20, preserveAspectRatio: 'xMidYMid meet', viewBox: '0 0 24 24' },
            svgIcon("g", {fill: '#ff6f61'},
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4zm3 2h-2v6h2V9z"}),
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6"}),
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M6 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H6z"}),
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M5 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"}),
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"}),
        ),
    ),
    block_importer: svgIcon("svg", {width: 20, height: 20, preserveAspectRatio: 'xMidYMid meet', viewBox: '0 0 24 24' },
            svgIcon("g", {fill: '#ff6f61'},
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4zm3 2h-2v6h2V9z"}),
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6"}),
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M6 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H6z"}),
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M5 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"}),
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: 'evenodd',  d: "M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"}),
        ),
    ),
    blockquote: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M9.49 13.22c0-.74-.2-1.38-.61-1.9c-.62-.78-1.83-.88-2.53-.72c-.29-1.65 1.11-3.75 2.92-4.65L7.88 4c-2.73 1.3-5.42 4.28-4.96 8.05C3.21 14.43 4.59 16 6.54 16c.85 0 1.56-.25 2.12-.75s.83-1.18.83-2.03zm8.05 0c0-.74-.2-1.38-.61-1.9c-.63-.78-1.83-.88-2.53-.72c-.29-1.65 1.11-3.75 2.92-4.65L15.93 4c-2.73 1.3-5.41 4.28-4.95 8.05c.29 2.38 1.66 3.95 3.61 3.95c.85 0 1.56-.25 2.12-.75s.83-1.18.83-2.03z"})
    ),
    buttons: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M17 5H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm1 7c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v5z"})
    ),
    buttons_child: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M17 5H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm1 7c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v5z"})
    ),
    call_mail_button: svgIcon("svg", {width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24"},
        svgIcon("path", {fill: "#ff6f61", d: "M21 8V7l-3 2l-3-2v1l3 2l3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"})
    ),
    call_to_action: svgIcon("svg", {width: 20, height: 20,},
        svgIcon("path", {fill: "#ff6f61", d: "M18.15 5.94c.46 1.62.38 3.22-.02 4.48c-.42 1.28-1.26 2.18-2.3 2.48c-.16.06-.26.06-.4.06c-.06.02-.12.02-.18.02c-.06.02-.14.02-.22.02h-6.8l2.22 5.5c.02.14-.06.26-.14.34c-.08.1-.24.16-.34.16H6.95c-.1 0-.26-.06-.34-.16c-.08-.08-.16-.2-.14-.34l-1-5.5H4.25l-.02-.02c-.5.06-1.08-.18-1.54-.62s-.88-1.08-1.06-1.88c-.24-.8-.2-1.56-.02-2.2c.18-.62.58-1.08 1.06-1.3l.02-.02l9-5.4c.1-.06.18-.1.24-.16c.06-.04.14-.08.24-.12c.16-.08.28-.12.5-.18c1.04-.3 2.24.1 3.22.98s1.84 2.24 2.26 3.86zm-2.58 5.98h-.02c.4-.1.74-.34 1.04-.7c.58-.7.86-1.76.86-3.04c0-.64-.1-1.3-.28-1.98c-.34-1.36-1.02-2.5-1.78-3.24s-1.68-1.1-2.46-.88c-.82.22-1.4.96-1.7 2c-.32 1.04-.28 2.36.06 3.72c.38 1.36 1 2.5 1.8 3.24c.78.74 1.62 1.1 2.48.88zm-2.54-7.08c.22-.04.42-.02.62.04c.38.16.76.48 1.02 1s.42 1.2.42 1.78c0 .3-.04.56-.12.8c-.18.48-.44.84-.86.94c-.34.1-.8-.06-1.14-.4s-.64-.86-.78-1.5c-.18-.62-.12-1.24.02-1.72s.48-.84.82-.94z"})
    ),
    card: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M2 2h16c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm15 14V7H3v9h14zM4 8v1h3V8H4zm4 0v3h8V8H8zm-4 4v1h3v-1H4zm4 0v3h8v-3H8z"})
    ),
    content_timeline: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M18 16V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h13c.55 0 1-.45 1-1zM8 11h1c.55 0 1 .45 1 1s-.45 1-1 1H8v1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V13H6c-.55 0-1-.45-1-1s.45-1 1-1h1V5.5c0-.28.22-.5.5-.5s.5.22.5.5V11zm5-2h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V5.5c0-.28.22-.5.5-.5s.5.22.5.5V7h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v5.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V9z"})
    ),
    count_down: svgIcon("svg", {width: 20, height: 20, viewBox: "0 0 384 384"},
        svgIcon("path", {fill: "#ff6f61", d: "M171 298.5q0-8.5 6-15t15-6.5t15 6.5t6 15t-6 15t-15 6.5t-15-6.5t-6-15zM171 0h21q80 0 136 56t56 136t-56 136t-136 56t-136-56T0 192q0-46 20.5-86.5T77 39v-1l145 145l-30 30L76 98q-33 41-33 94q0 62 43.5 105.5T192 341t105.5-43.5T341 192q0-56-36.5-98T213 44v41h-42V0zm149 192q0 9-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t15-6t15 6t6.5 15zm-256 0q0-9 6.5-15t15-6t15 6t6.5 15t-6.5 15t-15 6t-15-6t-6.5-15z"})
    ),
    count_up: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45c.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742c-.91 0-1.72-.613-1.72-1.758c0-1.148.848-1.836 1.973-1.836c1.09 0 2.063.637 2.063 2.688c0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972c0-.633-.398-1.008-.94-1.008c-.52 0-.927.375-.927 1c0 .64.418.98.934.98z"}),
        svgIcon("path", {fill: "#ff6f61", d: "M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"}),
    ),
    divider: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M4 9h12v2H4V9z"})
    ),
    expand: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M7 8h6v4H7zm-5 5v4h4l-1.2-1.2L7 12l-3.8 2.2M14 17h4v-4l-1.2 1.2L13 12l2.2 3.8M14 3l1.3 1.3L13 8l3.8-2.2L18 7V3M6 3H2v4l1.2-1.2L7 8L4.7 4.3"})
    ),
    flipbox: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M15.95 5H14l3.2 3.39L19.82 5h-1.78c0-2.89-1.89-5-5.04-5v2.1c2.1 0 2.95 1.16 2.95 2.9zM1 1h10v9h9v10H6v-5H1V1zm2 2v10h3v-3h3V3H3zm5 9v6h10v-6H8z"})
    ),
    gallery_masonry: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M22 9.999V20a1 1 0 0 1-1 1h-8V9.999h9zm-11 6V21H3a1 1 0 0 1-1-1v-4.001h9zM11 3v10.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v3.999h-9V3h8z"})
    ),
    googlemap: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M10 2C6.69 2 4 4.69 4 8c0 2.02 1.17 3.71 2.53 4.89c.43.37 1.18.96 1.85 1.83c.74.97 1.41 2.01 1.62 2.71c.21-.7.88-1.74 1.62-2.71c.67-.87 1.42-1.46 1.85-1.83C14.83 11.71 16 10.02 16 8c0-3.31-2.69-6-6-6zm0 2.56a3.44 3.44 0 1 1 0 6.88a3.44 3.44 0 0 1 0-6.88z"})
    ),
    icons_list: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"})
    ),
    icons_list_child: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"})
    ),
    image_boxes: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M4 22H2V4a2.002 2.002 0 0 1 2-2h18v2H4z"}),
        svgIcon("path", {fill: "#ff6f61", d: "M21 17a3 3 0 1 0-3-3a3.003 3.003 0 0 0 3 3zm0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1z"}),
        svgIcon("path", {fill: "#ff6f61", d: "M28 7H9a2.002 2.002 0 0 0-2 2v19a2.002 2.002 0 0 0 2 2h19a2.002 2.002 0 0 0 2-2V9a2.002 2.002 0 0 0-2-2zm0 21H9v-6l4-3.997l5.586 5.586a2 2 0 0 0 2.828 0L23 22.003L28 27zm0-3.828l-3.586-3.586a2 2 0 0 0-2.828 0L20 22.172l-5.586-5.586a2 2 0 0 0-2.828 0L9 19.172V9h19z"})
    ),
    image_slider: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M22 26H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM10 8v16h12V8z"}),
        svgIcon("path", {fill: "#ff6f61", d: "M4 24H0v-2h4V10H0V8h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"}),
        svgIcon("path", {fill: "#ff6f61", d: "M32 24h-4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4v2h-4v12h4z"})
    ),
    info_block: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M3 5h14V3H3v2zm9 8V7H3v6h9zm2-4h3V7h-3v2zm0 4h3v-2h-3v2zM3 17h14v-2H3v2z"}),
    ),
    inline_notice: svgIcon("svg", {width: 20, height: 20,  preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24"},
        svgIcon("path", {fill: "#ff6f61", d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z"})
    ),
    instagram: svgIcon("svg", {width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24"},
        svgIcon("g", {fill: "#ff6f61"},
            svgIcon("path", {fill: "#ff6f61", fillRule: "evenodd", clipRule: "evenodd", d: "M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z"})
        )
    ),
    post_carousel: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M5 14V6h10v8H5zm-3-1V7h2v6H2zm4-6v6h8V7H6zm10 0h2v6h-2V7zm-3 2V8H7v1h6zm0 3v-2H7v2h6z"})
    ),
    post_grid: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z"})
    ),
    post_timeline: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h9A1.5 1.5 0 0 0 14 8.5v-4A1.5 1.5 0 0 0 12.5 3h-9zM3 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4zm.5 6.5A1.5 1.5 0 0 0 2 12.5v4A1.5 1.5 0 0 0 3.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5h-9zM3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4zm14-.063a2.003 2.003 0 0 1-2.5-1.937A2 2 0 0 1 16 8.563a2.005 2.005 0 0 1 1 0a2 2 0 0 1 0 3.874zM16.5 3a.5.5 0 0 1 .5.5v4.041a3.02 3.02 0 0 0-1 0V3.5a.5.5 0 0 1 .5-.5zm0 10.5c-.17 0-.337-.014-.5-.041V17.5a.5.5 0 0 0 1 0v-4.041c-.163.027-.33.041-.5.041z"})
    ),
    pricing_list: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M12.5 10.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75zm.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5h-3.5zm-2.47-5.22a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2zm0 4.44a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0zm5.214-10.136A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764l.008.084zm0 .012L16 4.25c0-.052-.002-.103-.005-.154zM10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5z"})
    ),
    pricing_table: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"})
    ),
    progress_bar: svgIcon("svg", {width: 20, height: 20,  preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 32 32"},
        svgIcon("path", {fill: "#ff6f61", d: "M28 21H4a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2zM4 13v6h24v-6z"}),
        svgIcon("path", {fill: "#ff6f61", d: "M6 15h14v2H6z"}),
    ),
    section: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M19 16V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1zM4 4h13v4H4V4zm1 1v2h3V5H5zm4 0v2h3V5H9zm4 0v2h3V5h-3zm-8.5 5c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5zM6 10h4v1H6v-1zm6 0h5v5h-5v-5zm-7.5 2c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5zM6 12h4v1H6v-1zm7 0v2h3v-2h-3zm-8.5 2c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5zM6 14h4v1H6v-1z"})
    ),
    shape_divider: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M2 8.75A6.75 6.75 0 0 1 15.459 8H12.25A4.25 4.25 0 0 0 8 12.25v3.209A6.751 6.751 0 0 1 2 8.75z"}),
        svgIcon("path", {fill: "#ff6f61", d: "M12.25 9A3.25 3.25 0 0 0 9 12.25v6.5A3.25 3.25 0 0 0 12.25 22h6.5A3.25 3.25 0 0 0 22 18.75v-6.5A3.25 3.25 0 0 0 18.75 9h-6.5z"})
    ),
    social_share: svgIcon("svg", {width: 20, height: 20,  preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 512 512"},
        svgIcon("circle", {fill: "#ff6f61", stroke: "#ff6f61", cx: 128, cy: 256, r: 48, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32"}),
        svgIcon("circle", {fill: "#ff6f61", stroke: "#ff6f61", cx: 384, cy: 112, r: 48, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32"}),
        svgIcon("circle", {fill: "#ff6f61", stroke: "#ff6f61", cx: 384, cy: 400, r: 48, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32"}),
        svgIcon("path", {fill: "#ff6f61", stroke: "#ff6f61", strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: "32", d: "M169.83 279.53l172.34 96.94"}),
        svgIcon("path", {fill: "#ff6f61", stroke: "#ff6f61", strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: "32", d: "M342.17 135.53l-172.34 96.94"})
    ),
    spacer: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M11 21H3v-8h2v4.59L17.59 5H13V3h8v8h-2V6.41L6.41 19H11v2z"})
    ),
    table_of_contents: svgIcon("svg", {width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox:"0 0 48 48"},
        svgIcon("g", {fill: "none", stroke: "#ff6f61", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" },
        svgIcon("rect", {x: 8, y: 4, width: 32, height: 40 }),
        svgIcon("path", {d: "M14 16h20"}),
        svgIcon("path", {d: "M14 24h20"}),
        svgIcon("path", {d: "M14 32h20"}),
        svgIcon("path", {d: "M18 12v24"})
        )
    ),
    tabs: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M14 4V2H0v12h16V4h-2zm-4-1h3v1h-3V3zM6 3h3v1H6V3zm9 10H1V3h4v2h10v8z"})
    ),
    taxonomy_list: svgIcon("svg", {width: 20, height: 20,  preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24"},
        svgIcon("g", {fill: "none"},
            svgIcon("path", {fill: "#ff6f61", d: "M3.001 11.996l3 .004a1 1 0 0 1 .114 1.993L6 14L4 13.996v5.003L6 19a1 1 0 0 1 .993.883L7 20a1 1 0 0 1-.883.993L6 21H3a1 1 0 0 1-.993-.883L2 20v-7.004a1 1 0 0 1 .885-.994L3 11.996zM21 17a1 1 0 0 1 .117 1.993L21 19H9a1 1 0 0 1-.117-1.993L9 17h12zm0-3a1 1 0 0 1 .117 1.993L21 16H9a1 1 0 0 1-.117-1.993L9 14h12zM6 2a1 1 0 0 1 .117 1.993L6 4H4v4.995h2a1 1 0 0 1 .993.883L7 9.995a1 1 0 0 1-.883.993L6 10.995H3a1 1 0 0 1-.993-.883L2 9.995V3a1 1 0 0 1 .883-.993L3 2h3zm15 5a1 1 0 0 1 .117 1.993L21 9H9a1 1 0 0 1-.117-1.993L9 7h12zm0-3a1 1 0 0 1 .117 1.993L21 6H9a1 1 0 0 1-.117-1.993L9 4h12z"})
        )
    ),
    team: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10S4.48 0 10 0zm0 .5C4.75.5.5 4.75.5 10s4.25 9.5 9.5 9.5s9.5-4.25 9.5-9.5S15.25.5 10 .5zm0 1c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5s-8.5-3.8-8.5-8.5S5.3 1.5 10 1.5zm1.8 1.71c-.57 0-1.1.17-1.55.45a3.55 3.55 0 0 1 2.73 3.45c0 .69-.21 1.33-.55 1.87a2.917 2.917 0 0 0 2.29-2.85c0-1.61-1.31-2.92-2.92-2.92zm-2.38 1a2.926 2.926 0 1 0 .011 5.851A2.926 2.926 0 0 0 9.42 4.21zm4.25 5.01l-.51.59c2.34.69 2.45 3.61 2.45 3.61h1.28c0-4.71-3.22-4.2-3.22-4.2zm-2.1.8l-2.12 2.09l-2.12-2.09C3.12 10.24 3.89 15 3.89 15h11.08c.47-4.98-3.4-4.98-3.4-4.98z"})
    ),
    testimonial: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M8.54 12.74c0-.87-.24-1.61-.72-2.22c-.73-.92-2.14-1.03-2.96-.85c-.34-1.93 1.3-4.39 3.42-5.45L6.65 1.94C3.45 3.46.31 6.96.85 11.37C1.19 14.16 2.8 16 5.08 16c1 0 1.83-.29 2.48-.88c.66-.59.98-1.38.98-2.38zm9.43 0c0-.87-.24-1.61-.72-2.22c-.73-.92-2.14-1.03-2.96-.85c-.34-1.93 1.3-4.39 3.42-5.45l-1.63-2.28c-3.2 1.52-6.34 5.02-5.8 9.43c.34 2.79 1.95 4.63 4.23 4.63c1 0 1.83-.29 2.48-.88c.66-.59.98-1.38.98-2.38z"})
    ),
    testimonial_slider: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M4 3h12c.55 0 1.02.2 1.41.59S18 4.45 18 5v7c0 .55-.2 1.02-.59 1.41S16.55 14 16 14h-1l-5 5v-5H4c-.55 0-1.02-.2-1.41-.59S2 12.55 2 12V5c0-.55.2-1.02.59-1.41S3.45 3 4 3zm11 2H4v1h11V5zm1 3H4v1h12V8zm-3 3H4v1h9v-1z"})
    ),
    video_popup: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M19 15V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2zM8 14V6l6 4z"})
    ),
    wp_search: svgIcon("svg", {width: 20, height: 20},
        svgIcon("path", {fill: "#ff6f61", d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"}),
        svgIcon("path", {fill: "#ff6f61", d: "M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"})
    ),
}


export default ResponsiveBlockEditorAddonsIcons;
