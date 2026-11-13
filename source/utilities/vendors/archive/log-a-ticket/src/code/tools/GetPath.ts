//--|►| Get Path (Tool) |◄|--//
export namespace GetPath {
  export function forHTML(path: 'body' | 'header' | 'main' | 'sidebar' | 'overlay' | 'data') {
    switch (path) {
      case 'body':
        return 'html/index-body/'; //--► Body <body> ◄--//
      case 'header':
        return 'html/index-header/'; //--► Header <header> ◄--//
      case 'main':
        return 'html/index-main/'; //--► Main <main> ◄--//
      case 'sidebar':
        return 'html/index-sidebar/'; //--► Sidebar <aside> ◄--//
      case 'overlay':
        return 'html/index-overlay/'; //--► Overlay <section> ◄--//
      case 'data':
        return 'html/index-data/'; //--► Data <iframe> ◄--//
    }
  }
}
