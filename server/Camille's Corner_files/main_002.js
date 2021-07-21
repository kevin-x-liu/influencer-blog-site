webpackHotUpdate("main",{

/***/ "./src/components/Blog.js":
/*!********************************!*\
  !*** ./src/components/Blog.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostCard */ "./src/components/PostCard.js");
/* harmony import */ var _ShowPost_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowPost.js */ "./src/components/ShowPost.js");
/* harmony import */ var _AddCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddCard */ "./src/components/AddCard.js");
/* harmony import */ var _css_Blog_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/Blog.css */ "./src/css/Blog.css");
/* harmony import */ var _css_Blog_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_Blog_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-masonry-css */ "./node_modules/react-masonry-css/dist/react-masonry-css.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_BlogPostContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/BlogPostContext */ "./src/context/BlogPostContext.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/ronran/GitHub/Launch-Stuff/influencer/src/components/Blog.js",
    _s = __webpack_require__.$Refresh$.signature();












function Blog() {
  _s();

  // const [posts, setPosts] = useState([]);
  const {
    posts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_BlogPostContext__WEBPACK_IMPORTED_MODULE_8__["BlogPostContext"]);
  const match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useRouteMatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])(); // const [input, setInput] = useState("canyon");
  // const [random, setRandom] = useState(false);
  //Will retrieve random photos from the API for testing
  // const getSomePhotos = async () => {
  //     const url = new URL('https://api.unsplash.com/search/photos');
  //     url.searchParams.append('client_id', process.env.REACT_APP_access_key);
  //     url.searchParams.append('query', input);
  //     // console.log(input);
  //     // console.log(url.toString());
  //     fetch(url)
  //         .then(resp => resp.json())
  //         .then(resp => setPosts(resp.results))
  //         .then(resp => resp);
  //     setRandom(true);
  // }

  /**
   * Retrieves the photos from the backend
   * 
   */
  // const getMyPhotos = async () => {
  //     fetch('/blog/get')
  //         .then(resp => resp.json())
  //         .then(resp => setPosts(resp));
  // }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// getSomePhotos();
    // getMyPhotos();
  }, [posts]);
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }; // console.log("posts", posts);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: match.path,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          style: {
            display: "flex",
            justifyContent: "center"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            variant: "contained",
            onClick: () => history.push(`/addBlogPost`),
            children: "Add Blog Post"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_masonry_css__WEBPACK_IMPORTED_MODULE_6__["default"], {
          breakpointCols: breakpoints,
          className: "my-masonry-grid",
          columnClassName: "my-masonry-grid_column",
          children: posts && posts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
            info: post
          }, post.doc_id, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 52
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: `${match.path}/addBlogPost`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_AddCard__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      path: `${match.path}/:postID`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ShowPost_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, this);
}

_s(Blog, "LUhO1jgn+whkL5Wov78fWuCHHbQ=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useRouteMatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"]];
});

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

__webpack_require__.$Refresh$.register(_c, "Blog");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.c9056212865f885f08eb.hot-update.js.map