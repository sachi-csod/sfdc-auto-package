"use strict";(self.webpackChunkedc_widgets_sfdc=self.webpackChunkedc_widgets_sfdc||[]).push([[96],{9467:(e,a,l)=>{l.d(a,{Z:()=>o});l(1649);var n=l(2143),d=l(3442),s=l(5490),i=l(7064),t=l(8170);const o=e=>{let{goBack:a}=e;const l=(0,d.s0)();return(0,t.jsx)("div",{className:"edc-position-relative edc-back-button",children:(0,t.jsxs)("div",{onClick:()=>{"function"!==typeof a?l(-1):a()},className:"edc-d-flex edc-pointer edc-align-items-center edc-gap-one-fourth edc-back-button-icon-and-text",children:[(0,t.jsx)("span",{className:"edc-d-inline-flex",children:(0,t.jsx)(n.ArrowBackwardIcon,{width:10,height:20})}),(0,t.jsx)("span",{children:(0,i.TB)({key:"back",defaultTranslatedValue:s.p.Search.back})})]})})}},3838:(e,a,l)=>{l.d(a,{Z:()=>t});l(1649);var n=l(2143),d=l(5490),s=l(7064),i=l(8170);const t=e=>{let{onClick:a=(()=>{})}=e;return(0,i.jsx)("div",{className:"edc-view-more-btn-container",children:(0,i.jsx)(n.PrimaryButton,{fillColor:"#ffffff",onClick:a,text:(0,s.IQ)({key:"viewMore",defaultTranslatedValue:d.p.Notification.view_more}),variant:"outlined"})})}},9096:(e,a,l)=>{l.r(a),l.d(a,{default:()=>m});var n=l(1649),d=l(2143),s=l(9467),i=l(24),t=l(3838),o=l(2856),r=l(5490),c=l(5201),u=l(4019),k=l(7064),v=l(8079),f=l(8170);const m=()=>{const[e,a]=(0,n.useState)([]),[l,m]=(0,n.useState)(!0),[b,h]=(0,n.useState)(0),[x,p]=(0,n.useState)(0),j=(0,c.p)(),C=(0,n.useCallback)((async()=>{var e;m(!0);const[l,n]=await(0,u.XV)({limit:o.default.CARD_LIMIT,offset:b});var d,s;if(null!==l&&void 0!==l&&null!==(e=l.bookmarks)&&void 0!==e&&e.cards)a((e=>0===b?l.bookmarks.cards:[...e,...l.bookmarks.cards])),null!==l&&void 0!==l&&null!==(d=l.bookmarks)&&void 0!==d&&d.total&&p(null===l||void 0===l||null===(s=l.bookmarks)||void 0===s?void 0:s.total);else if(n){var i;j.open(null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.message)}m(!1)}),[b,j]),g=(0,n.useCallback)((()=>{h(b+o.default.CARD_LIMIT)}),[b]);return(0,n.useEffect)((()=>{C()}),[C]),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"edc-mybookmark-back",children:[(0,f.jsx)(s.Z,{}),(0,f.jsx)("h2",{className:"edc-mybookmark",children:(0,k.eO)({key:"myBookmark",defaultTranslatedValue:r.p.Cards.my_bookmark})})]}),(0,f.jsxs)("div",{className:"edc-view-all-no-height-container edc-my-bookmark-height",children:[!(0,v.xb)(e)&&(null===e||void 0===e?void 0:e.map(((l,s)=>{var t;return(0,f.jsx)(n.Suspense,{fallback:(0,f.jsx)(d.SmartCardSkeleton,{}),children:(0,f.jsx)(i.default,{cardData:l,handleUnbookmarkClick:l=>{const n=null===e||void 0===e?void 0:e.filter((e=>{let{id:a}=e;return a!==l}));a(n)}},null!==(t=null===l||void 0===l?void 0:l.id)&&void 0!==t?t:s)},s)}))),(0,v.xb)(e)&&!l&&(0,f.jsx)("div",{className:"edc-spinner-container",children:(0,k.eO)({key:"Cards_noContentFound",defaultTranslatedValue:r.p.Cards.no_content_found})}),l&&(0,f.jsx)("div",{className:"edc-spinner-container",children:(0,f.jsx)(d.Spinner,{variant:"lg",spinnerMessage:(0,k.eO)({key:"waitingCardsLoaderLabel",defaultTranslatedValue:r.p.Cards.waiting_cards_loader_label})})}),!l&&x>(null===e||void 0===e?void 0:e.length)?(0,f.jsx)(t.Z,{onClick:g}):null]})]})}}}]);