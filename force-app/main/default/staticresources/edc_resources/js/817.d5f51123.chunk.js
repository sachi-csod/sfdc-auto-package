"use strict";(self.webpackChunkedc_widgets_sfdc=self.webpackChunkedc_widgets_sfdc||[]).push([[817],{4866:(e,a,l)=>{l.d(a,{Z:()=>c});var d=l(1649),o=l(2143),t=l(24),i=l(5490),n=l(7064),s=l(3838),r=l(8170);const u=e=>{var a,l,u;let{isLoading:c,cards:v,setCards:m,total:p,offset:C,showCount:k=!0,onCardClick:T=null,isLarge:g=!1,showViewMore:y=!1,viewMoreCallback:f=(()=>{})}=e;const b=(0,d.useCallback)((e=>{const a=null!==e&&void 0!==e&&e.assignable?null===e||void 0===e?void 0:e.assignable:e;return e?(0,r.jsx)("div",{className:"user-content__grid-item",children:(0,r.jsx)(t.default,{handleCardClick:T&&"function"==typeof T?()=>T(a.id):null,cardData:a,isLarge:g,setCards:m})},null===e||void 0===e?void 0:e.id):null}),[g,T,m]),S=(0,d.useMemo)((()=>(null===v||void 0===v?void 0:v.length)&&!c&&p&&k),[null===v||void 0===v?void 0:v.length,c,k,p]),_=(0,d.useMemo)((()=>!c&&(null===v||void 0===v?void 0:v.length)&&(null===v||void 0===v?void 0:v.length)<p&&y),[null===v||void 0===v?void 0:v.length,c,y,p]),h=(0,d.useMemo)((()=>!c&&Array.isArray(v)&&!(null!==v&&void 0!==v&&v.length)),[v,c]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"user-content__grid",children:[c&&!C?null===(a=Array(4).fill((()=>(0,r.jsx)(o.SmartCardSkeleton,{}))))||void 0===a?void 0:a.map(((e,a)=>(0,r.jsx)(o.SmartCardSkeleton,{},a))):Array.isArray(v)?null===v||void 0===v?void 0:v.map((e=>b(e))):null,c&&C?null===(l=Array(4).fill((()=>(0,r.jsx)(o.SmartCardSkeleton,{}))))||void 0===l?void 0:l.map(((e,a)=>(0,r.jsx)(o.SmartCardSkeleton,{},a))):null]}),h?(0,r.jsx)(o.Typography,{variant:"h6",className:"edc-text-center",children:(0,n.eO)({key:"Cards_noAvailableCards",defaultTranslatedValue:i.p.Cards.no_available_cards})}):null,S?(0,r.jsx)(o.Typography,{variant:"h6",className:"edc-text-center edc-mt-8",children:(0,n.eO)({key:"Cards_showingOutOfTotalText",defaultTranslatedValue:null===(u=i.p.Cards.showing_out_of_total_text)||void 0===u?void 0:u.replace("{{length}}",(null===v||void 0===v?void 0:v.length)||0).replace("{{total}}",p),variables:{length:null===v||void 0===v?void 0:v.length,total:p}})}):null,_?(0,r.jsx)(s.Z,{onClick:f}):null]})},c=d.memo(u)},3838:(e,a,l)=>{l.d(a,{Z:()=>n});l(1649);var d=l(2143),o=l(5490),t=l(7064),i=l(8170);const n=e=>{let{onClick:a=(()=>{})}=e;return(0,i.jsx)("div",{className:"edc-view-more-btn-container",children:(0,i.jsx)(d.PrimaryButton,{fillColor:"#ffffff",onClick:a,text:(0,t.IQ)({key:"viewMore",defaultTranslatedValue:o.p.Notification.view_more}),variant:"outlined"})})}},7663:(e,a,l)=>{l.r(a),l.d(a,{default:()=>W});var d=l(1649),o=l(2143),t=l(3442),i=l(4945),n=l(6442),s=l(2856),r=l(5490),u=l(1839),c=l(5201),v=l(4019),m=l(5338),p=l(8411),C=l(7064),k=l(8170);const T=e=>{var a,l,T,g,y,f,b;let{journeyData:S,setData:_,isCompleted:h,cardMetaData:x,permissions:A,isMarkAsCompleteEnabled:D,orgConfigs:w}=e;const M=(0,t.s0)(),V=(0,c.p)(),[P,E]=(0,d.useState)(!1),[I,j]=(0,d.useState)(null===S||void 0===S?void 0:S.averageRating),O=(0,d.useCallback)((e=>{M("".concat(s.default.PAGES.USER_PROFILE,"/").concat(e.handle))}),[M]),L=(0,d.useCallback)((e=>{M("".concat(s.default.PAGES.CHANNEL_DETAIL,"/").concat(null===e||void 0===e?void 0:e.id))}),[M]),N=(0,d.useCallback)((e=>{M("".concat(s.default.PAGES.GROUP_DETAIL,"/").concat(null===e||void 0===e?void 0:e.id))}),[M]),R=(0,d.useCallback)((async()=>{if(S.completedPercentage<100){const[a,l]=await(0,m.Zr)({...S,isMarkedAsCompleted:S.completedPercentage>=100,cardId:S.id});if(a){const e=null===x||void 0===x?void 0:x.readableCardType,l=e===s.default.PATHWAY?(0,C.HQ)({key:"Channels_pathwayCompleteSuccess",defaultTranslatedValue:r.p.Channels.pathwayCompleteSuccess}):e===s.default.JOURNEY?(0,C.HQ)({key:"Channels_journeyCompleteSuccess",defaultTranslatedValue:r.p.Channels.journeyCompleteSuccess}):"";l&&(null===a||void 0===a?void 0:a.completedPercentage)>=100&&V.open(l),_((e=>({...e,completionState:null===a||void 0===a?void 0:a.state,completedPercentage:null===a||void 0===a?void 0:a.completedPercentage})))}else{var e;V.open((null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.message)||(0,C.eO)({key:"errorMessage",defaultTranslatedValue:r.p.Cards.error_message}))}}else E(!0)}),[null===x||void 0===x?void 0:x.readableCardType,S,_,V]),G=(0,d.useCallback)((async e=>{const[a,l]=await(0,v.oM)({cardId:null===S||void 0===S?void 0:S.id,rate:e});var d;a&&null!==a&&void 0!==a&&a.averageRating&&!l?(_(a),j((null===a||void 0===a?void 0:a.averageRating)||e)):(j(null===S||void 0===S?void 0:S.averageRating),V.open((null===l||void 0===l||null===(d=l.data)||void 0===d?void 0:d.message)||(0,C.eO)({key:"errorMessage",defaultTranslatedValue:r.p.Cards.error_message})))}),[null===S||void 0===S?void 0:S.averageRating,null===S||void 0===S?void 0:S.id,_,V]),B=(0,d.useCallback)((async()=>{const[e,a]=await(0,m.Zr)({...S,isMarkedAsCompleted:S.completedPercentage>=100,cardId:S.id});if(e){const a=null===x||void 0===x?void 0:x.readableCardType,l=a===s.default.PATHWAY?(0,C.HQ)({key:"Channels_pathwayInCompleteSuccess",defaultTranslatedValue:r.p.Channels.pathwayInCompleteSuccess}):a===s.default.JOURNEY?(0,C.HQ)({key:"Channels_journeyInCompleteSuccess",defaultTranslatedValue:r.p.Channels.journeyInCompleteSuccess}):"";l&&(null===e||void 0===e?void 0:e.completedPercentage)<=100&&V.open(l),_((a=>({...a,completionState:null===e||void 0===e?void 0:e.state,completedPercentage:null===e||void 0===e?void 0:e.completedPercentage}))),E(!1)}else{var l,d;V.open(null!==(l=null===a||void 0===a||null===(d=a.data)||void 0===d?void 0:d.message)&&void 0!==l?l:(0,C.HQ)({key:":",defaultTranslatedValue:r.p.Channels.error_message}))}}),[null===x||void 0===x?void 0:x.readableCardType,S,_,V]),W=(0,k.jsx)("div",{className:"edc-mark-incomplete-body",children:(0,C.AW)({key:"SmartCardDetailView_markAsIncompleteBody",defaultTranslatedValue:r.p.SmartCardDetailView.mark_as_incomplete_body.replace("{{readableCardTypeLabel}}",null===x||void 0===x?void 0:x.readableCardType),variables:{readableCardTypeLabel:null===x||void 0===x?void 0:x.readableCardType}})}),Y=(0,d.useMemo)((()=>h||(0,p.Om)(w)),[h,w]);return(0,k.jsxs)("div",{className:" edc-paper",children:[(0,k.jsx)(o.JourneyPathwayDetailViewFooter,{assignedToTeams:null===S||void 0===S||null===(a=S.assignedToTeams)||void 0===a?void 0:a.map((e=>({...e,label:e.label}))),completed:Y,collaborators:null===S||void 0===S||null===(l=S.contributors)||void 0===l?void 0:l.map((e=>({...e,label:e.name}))),channels:null===S||void 0===S||null===(T=S.channels)||void 0===T?void 0:T.map((e=>({...e,label:e.label}))),credits:null===S||void 0===S?void 0:S.eclSourceCpeCredits,duration:null===S||void 0===S||null===(g=S.eclDurationMetadata)||void 0===g?void 0:g.calculated_duration_display,isMarkAsCompleteEnabled:D,isPrivate:!(null!==S&&void 0!==S&&S.isPublic),language:null===x||void 0===x?void 0:x.language,level:null===x||void 0===x?void 0:x.skillLevel,translatedSkillLevelToolTipText:null===x||void 0===x?void 0:x.translatedSkillLevelDesc,onMarkComplete:R,skills:null===S||void 0===S||null===(y=S.userTaxonomyTopics)||void 0===y?void 0:y.map((e=>e.label)),sharedWithTeams:null===S||void 0===S||null===(f=S.sharedWithTeams)||void 0===f?void 0:f.map((e=>({...e,label:e.label}))),topics:null===S||void 0===S||null===(b=S.tags)||void 0===b?void 0:b.map((e=>e.name)),type:null===x||void 0===x?void 0:x.readableCardType,completeText:(null===S||void 0===S?void 0:S.completedPercentage)>=100?(0,C.AW)({key:"completed",defaultTranslatedValue:r.p.SmartCardDetailView.completed}):(0,C.AW)({key:"SmartCardDetailView_markAsCompleted",defaultTranslatedValue:r.p.SmartCardDetailView.mark_as_completed}),creditsTextLabel:(0,C.AW)({key:"SmartCardDetailView_creditsLabelText",defaultTranslatedValue:r.p.SmartCardDetailView.credits_label_text}),privateTextLabel:(0,C.AW)({key:"privateTextLabel",defaultTranslatedValue:r.p.SmartCardDetailView.private_label_text}),channelText:(0,C.AW)({key:"channelText",defaultTranslatedValue:r.p.SmartCardDetailView.channel_text}),sharedWithTeamsText:(0,C.AW)({key:"SmartCardDetailView_sharedWithTeamsText",defaultTranslatedValue:r.p.SmartCardDetailView.shared_with_teams_text}),assignedToTeamsText:(0,C.AW)({key:"SmartCardDetailView_assignedToTeamsText",defaultTranslatedValue:r.p.SmartCardDetailView.assigned_to_teams_text}),tagText:(0,C.AW)({key:"SmartCardDetailView_tagText",defaultTranslatedValue:r.p.SmartCardDetailView.tag_text}),skillsText:(0,C.AW)({key:"skillsText",defaultTranslatedValue:r.p.SmartCardDetailView.skills_text}),CollaboratorsText:(0,C.AW)({key:"collaboratorsText",defaultTranslatedValue:r.p.SmartCardDetailView.collaborators_text}),onCollaboratorClick:O,onChannelClick:L,sharedWithTeamsClick:N,assignedToTeamsClick:N,...A.isRatingEnabled?{ratingValue:I,onRatingChange:e=>{j(e),G(e)},ratingEditable:!0}:{},starText:(0,C.eO)({key:"star",defaultTranslatedValue:u.w.Cards.star}),starPluralText:(0,C.eO)({key:"stars",defaultTranslatedValue:u.w.Cards.stars})}),i.createPortal((0,k.jsx)("div",{children:P?(0,k.jsx)(n.D,{isModalOpen:P,closeModal:()=>E(!1),modalBody:W,onMarkAsInComplete:B}):null}),document.body)]})};var g=l(710),y=l(6873),f=l(4270),b=l(4584),S=l(4607),_=l(8176),h=l(1180),x=l(6333),A=l(8984),D=l(7541),w=l(8879),M=l(5886),V=l(4959),P=l(224);const E=e=>{var a,l,i,n,u,v,p,T,E,I;let{journeyData:j,setData:O,isPathway:L,onProgressBtnClick:N,permissions:R,setPermissions:G,cardMetaData:B,setJourneyData:W}=e;const Y=(0,t.s0)(),{userInfo:H,orgInfo:U,rootElement:J}=(0,d.useContext)(A.Il),F=(0,d.useContext)(D.Z),Z=(0,c.p)(),[Q,q]=(0,d.useState)({}),[K,z]=(0,d.useState)(!1),[X,$]=(0,d.useState)(!1),[ee,ae]=(0,d.useState)(!1),{isShowAuthor:le=!1,isShowProvider:de=!1}=B,oe=(0,d.useMemo)((()=>{var e,a;return U&&(null===(e=U.configs)||void 0===e||null===(a=e.find((e=>e.name===s.default.ADMIN_CONFIG.ENABLE_SHOW_CREATOR)))||void 0===a?void 0:a.value)||!1}),[U]),te=(0,d.useMemo)((()=>le&&de||le?s.default.CARD_AVATAR_TYPE.AUTHOR:de?s.default.CARD_AVATAR_TYPE.PROVIDER:null),[le,de]),ie=(0,d.useMemo)((()=>null!==j&&void 0!==j&&j.completionState?[100,98].includes(null===j||void 0===j?void 0:j.completedPercentage)?null:(0,C.AW)({key:"continueButtonText",defaultTranslatedValue:r.p.SmartCardDetailView.continue_button_text}):(0,C.AW)({key:"SmartCardDetailView_startButtonText",defaultTranslatedValue:r.p.SmartCardDetailView.start_button_text})),[null===j||void 0===j?void 0:j.completedPercentage,null===j||void 0===j?void 0:j.completionState]),ne=(0,d.useMemo)((()=>{var e,a;return(0,w.f)(null===j||void 0===j?void 0:j.filestack[0].url,"height:200",null===j||void 0===j||null===(e=j.filestack[0])||void 0===e?void 0:e.mimetype,null===j||void 0===j||null===(a=j.filestack[0])||void 0===a?void 0:a.handle,null===H||void 0===H?void 0:H.filestackApp,null===H||void 0===H?void 0:H.jwtToken,!0)}),[null===j||void 0===j?void 0:j.filestack,null===H||void 0===H?void 0:H.filestackApp,null===H||void 0===H?void 0:H.jwtToken]),se=(0,d.useCallback)((async e=>{const a=e===s.default.ICONS.like,l=e===s.default.ICONS.bookmark;let d=s.default.HTTP_METHOD.POST;(a&&j.isUpvoted||l&&j.isBookmarked)&&(d=s.default.HTTP_METHOD.DELETE);const[,o]=await(0,m.Sq)({actionType:e,methodType:d,userInfo:H,miniCardData:{id:null===j||void 0===j?void 0:j.id}});if(o)return;let t={};var i;a&&(t={isUpvoted:!(null!==j&&void 0!==j&&j.isUpvoted),votesCount:null!==j&&void 0!==j&&j.isUpvoted?(null===j||void 0===j?void 0:j.votesCount)-1:(null===j||void 0===j?void 0:j.votesCount)+1,voters:null!==j&&void 0!==j&&j.isUpvoted?null===j||void 0===j||null===(i=j.voters)||void 0===i?void 0:i.filter((e=>(null===e||void 0===e?void 0:e.id)!==(null===H||void 0===H?void 0:H.id))):[...(null===j||void 0===j?void 0:j.voters)||[],{handle:null===H||void 0===H?void 0:H.handle,name:null===H||void 0===H?void 0:H.name,id:null===H||void 0===H?void 0:H.id,avatarimages:null===H||void 0===H?void 0:H.avatarimages}]});if(l){t={isBookmarked:!(null!==j&&void 0!==j&&j.isBookmarked)};let e=null!==j&&void 0!==j&&j.isBookmarked?"unbookmark_message":"bookmark_message",a=j.isBookmarked?"unbookmarked":"Cards_bookmarkMessage";(null===j||void 0===j?void 0:j.readableCardType)===s.default.CARD_TYPE.JOURNEY?(e=null!==j&&void 0!==j&&j.isBookmarked?"journey_unbookmark_message":"journey_bookmark_message",a=null!==j&&void 0!==j&&j.isBookmarked?"Cards_journeyUnbookmarkMessage":"Cards_journeyBookmarkMessage"):(null===j||void 0===j?void 0:j.readableCardType)===s.default.CARD_TYPE.PATHWAY&&(e=null!==j&&void 0!==j&&j.isBookmarked?"pathway_unbookmark_message":"pathway_bookmark_message",a=null!==j&&void 0!==j&&j.isBookmarked?"Cards_pathwayUnbookmarkMessage":"Cards_pathwayBookmarkMessage"),Z.open((0,C.eO)({key:a,defaultTranslatedValue:r.p.Cards[e]}))}O((e=>({...e,...t})))}),[j.isUpvoted,j.isBookmarked,null===j||void 0===j?void 0:j.id,null===j||void 0===j?void 0:j.votesCount,null===j||void 0===j?void 0:j.voters,null===j||void 0===j?void 0:j.readableCardType,H,O,Z]),re=(0,d.useCallback)((()=>{var e;J?J.getElementsByClassName("edc-comment-input")[0].focus():null===(e=document.querySelector(".edc-comment-input"))||void 0===e||e.focus()}),[J]),ue=(0,d.useMemo)((()=>(0,M.x)({permissions:R})),[R]),ce=(0,d.useCallback)((()=>{K?Z.open((0,C.o2)({key:"ReportIt_alreadyReportedMessage",defaultTranslatedValue:r.p.ReportIt.already_reported_message})):q((e=>({...e,[M.eG.REPORT]:!0})))}),[K,Z]),ve=(0,d.useCallback)((e=>{(null===e||void 0===e?void 0:e.key)===M.eG.REPORT?ce():q((a=>({...a,[null===e||void 0===e?void 0:e.key]:!0})))}),[ce]),me=(0,d.useCallback)((e=>{q((a=>({...a,[e]:!1})))}),[]),pe=(0,d.useCallback)((()=>{!(null!==j&&void 0!==j&&j.isPublic)?ae(!0):$(!0)}),[null===j||void 0===j?void 0:j.isPublic]),Ce=(0,d.useCallback)((e=>{e?pe():$(e)}),[pe]),ke=(0,d.useCallback)((()=>{(null===j||void 0===j?void 0:j.completedPercentage)>=0&&(null===j||void 0===j?void 0:j.completedPercentage)<100&&N()}),[null===j||void 0===j?void 0:j.completedPercentage,N]),Te=(0,d.useCallback)((()=>{var e,a;const l=(null===B||void 0===B||null===(e=B.author)||void 0===e?void 0:e.id)||(null===B||void 0===B||null===(a=B.author)||void 0===a?void 0:a.handle);l&&Y("".concat(s.default.PAGES.USER_PROFILE,"/").concat(l))}),[null===B||void 0===B||null===(a=B.author)||void 0===a?void 0:a.handle,null===B||void 0===B||null===(l=B.author)||void 0===l?void 0:l.id,Y]);(0,d.useEffect)((()=>{null!==j&&void 0!==j&&j.isReported&&z(null===j||void 0===j?void 0:j.isReported)}),[null===j||void 0===j?void 0:j.isReported]);const ge=(0,k.jsx)("div",{className:"edc-private-share-modal-body",children:(0,C.Fr)({key:"MiniCard_sharePrivateCardInfoText",defaultTranslatedValue:null===(i=r.p.MiniCard.share_private_card_info_text)||void 0===i?void 0:i.replace("{{cardType}}",(0,P.Aw)(j.readableCardType)),variables:{cardType:(0,P.Aw)(j.readableCardType)}})});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"edc-my-1 edc-pathway-detail-header",children:(0,k.jsx)(o.JourneyPathwayDetailViewHeader,{assignedByName:null===j||void 0===j||null===(n=j.assigner)||void 0===n?void 0:n.fullName,assignedByText:(0,C.oj)({key:"SmartCardDetailViewHeader_assignedByLabel",defaultTranslatedValue:r.p.SmartCardDetailViewHeader.assigned_by_label}),assignedDate:null!==j&&void 0!==j&&j.assignedAt?F(null===j||void 0===j?void 0:j.assignedAt).format("DD MMM YYYY"):null,isBookmarkCardEnabled:null===R||void 0===R?void 0:R.isBookmarkCardEnabled,authorName:null===B||void 0===B||null===(u=B.author)||void 0===u?void 0:u.fullName,avatarImage:null===B||void 0===B||null===(v=B.author)||void 0===v?void 0:v.imgSrc,avatarImages:null===j||void 0===j||null===(p=j.voters)||void 0===p?void 0:p.map((e=>({fullName:null===e||void 0===e?void 0:e.name,id:null===e||void 0===e?void 0:e.id,imgSrc:(0,V.HK)(e)}))),bodyText:(0,k.jsx)("div",{dangerouslySetInnerHTML:{__html:null===j||void 0===j?void 0:j.cardMessage}}),cardImage:ne,contextMenuOptions:ue,creationDate:null!==j&&void 0!==j&&j.createdAt?F(null===j||void 0===j?void 0:j.createdAt).format("DD MMM YYYY"):null,dueText:(0,C.AW)({key:"due",defaultTranslatedValue:r.p.SmartCardDetailView.due_text}),dueDate:null!==j&&void 0!==j&&j.dueAt?F(null===j||void 0===j?void 0:j.dueAt).format("DD MMM YYYY"):null,footerButtons:[...null!==R&&void 0!==R&&R.isLikeCardEnabled?[{icon:null!==j&&void 0!==j&&j.isUpvoted?(0,k.jsx)(o.FilledLikeIcon,{width:"20px",height:"20px",color:"var(--edc-color-green_primary)"}):(0,k.jsx)(o.LikeIcon,{}),onClick:()=>se(s.default.ICONS.like),text:(0,C.AW)({key:"likeSingularLabel",defaultTranslatedValue:r.p.SmartCardDetailView.like})}]:[],...null!==R&&void 0!==R&&R.isCommentCardEnabled?[{icon:(0,k.jsx)(o.CommentIcon,{}),onClick:re,text:(0,C.AW)({key:"SmartCardDetailView_comment",defaultTranslatedValue:r.p.SmartCardDetailView.comment})}]:[],...null!==R&&void 0!==R&&R.isShareCardEnabled?[{icon:(0,k.jsx)(o.ShareIcon,{}),onClick:()=>{Ce(!0)},text:(0,C.AW)({key:"share",defaultTranslatedValue:r.p.SmartCardDetailView.share})}]:[]],jobTitle:null===B||void 0===B||null===(T=B.author)||void 0===T?void 0:T.designation,numberOfComments:null===j||void 0===j?void 0:j.commentsCount,commentSingularlLabel:(0,C.AW)({key:"commentSingularLabel",defaultTranslatedValue:r.p.SmartCardDetailView.comment_singular_label}),commentPluralLabel:(0,C.AW)({key:"commentSingularLabel",defaultTranslatedValue:r.p.SmartCardDetailView.comment_plural_label}),numberOfLikes:null===j||void 0===j?void 0:j.votesCount,likeSingularLabel:(0,C.AW)({key:"likeSingularLabel",defaultTranslatedValue:r.p.SmartCardDetailView.like_singular_label}),likePluralLabel:(0,C.AW)({key:"likePluralLabel",defaultTranslatedValue:r.p.SmartCardDetailView.like_plural_label}),onBookmark:()=>se(s.default.ICONS.bookmark),onOptionSelect:ve,title:null===j||void 0===j?void 0:j.cardTitle,isBookmarked:null===j||void 0===j?void 0:j.isBookmarked,cardType:L?"pathway":"journey",cardAvatarType:te,isShowCreator:oe||de,onProfileClick:Te,cardTypeText:L?(0,C.eO)({key:"pathway",defaultTranslatedValue:r.p.Cards.pathway}):(0,C.eO)({key:"journey",defaultTranslatedValue:r.p.Cards.journey}),rootElement:J,isLikeEnabled:null===R||void 0===R?void 0:R.isLikeCardEnabled,isCommentCardEnabled:null===R||void 0===R?void 0:R.isCommentCardEnabled})}),(0,k.jsx)("div",{className:"edc-my-2 edc-paper box-shadow",children:(0,k.jsx)(o.JourneyPathwayDetailViewProgressBar,{badgeImage:(null===j||void 0===j||null===(E=j.badging)||void 0===E?void 0:E.imageOriginalUrl)||null,badgeText:(null===j||void 0===j||null===(I=j.badging)||void 0===I?void 0:I.title)||"",buttonText:ie,completionBadgeText:(0,C.AW)({key:"SmartCardDetailView_completionBadgeText",defaultTranslatedValue:r.p.SmartCardDetailView.completion_badge_text}),onButtonClick:ke,progress:null===j||void 0===j?void 0:j.completedPercentage,progressText:(0,C.AW)({key:"SmartCardDetailView_progressText",defaultTranslatedValue:r.p.SmartCardDetailView.progress_text})})}),X?(0,k.jsx)(x.r,{isModalOpen:X,closeModal:()=>Ce(!1),cardData:j,isPrivate:!(null!==j&&void 0!==j&&j.isPublic)}):null,Q[M.eG.ASSIGN_TO_ME]?(0,k.jsx)(f.Y,{isModalopen:Q[M.eG.ASSIGN_TO_ME],closeModal:()=>me(M.eG.ASSIGN_TO_ME),cardData:j,permissions:R,setPermissions:G,onSubmitSuccess:()=>{W((e=>({...e,isAssigned:!0})))},readableCardType:j.readableCardType}):null,Q[M.eG.ASSIGN]?(0,k.jsx)(y.Y,{cardId:null===j||void 0===j?void 0:j.id,userInfo:H,isAssignModalOpen:Q[M.eG.ASSIGN],closeAssignModal:()=>me(M.eG.ASSIGN),isPrivate:!(null!==j&&void 0!==j&&j.isPublic),readableCardType:j.readableCardType}):null,Q[M.eG.REPORT]?(0,k.jsx)(_.w,{isModalOpen:Q[M.eG.REPORT],cardId:null===j||void 0===j?void 0:j.id,closeModal:()=>me(M.eG.REPORT),setIsReported:z}):null,Q[M.eG.ADD_TO_JOURNEY]?(0,k.jsx)(g._,{isModalOpen:Q[M.eG.ADD_TO_JOURNEY],cardId:null===j||void 0===j?void 0:j.id,closeModal:()=>me(M.eG.ADD_TO_JOURNEY),isPathway:L}):null,Q[M.eG.CARD_INSIGHTS]?(0,k.jsx)(b.R,{cardId:null===j||void 0===j?void 0:j.id,isModalOpen:Q[M.eG.CARD_INSIGHTS],closeModal:()=>me(M.eG.CARD_INSIGHTS),userInfo:H}):null,Q[M.eG.DISMISS_ASSIGNMENT]?(0,k.jsx)(S.Y,{closeModal:()=>{me(M.eG.DISMISS_ASSIGNMENT)},isModalOpen:Q[M.eG.DISMISS_ASSIGNMENT],cardData:j,onSubmitSuccess:()=>{me(M.eG.DISMISS_ASSIGNMENT),W((e=>({...e,isAssigned:!1})))}}):null,ee?(0,k.jsx)(h.H,{isModalOpen:ee,closeModal:()=>ae(!1),modalBody:ge,onSharePrivateCallback:()=>$(!0)}):null]})};var I=l(9467),j=l(4866),O=l(2098);const L=e=>{var a,l,t;let{id:i,sectionData:n,handleCardClick:m,isDisabled:p}=e;const[T,g]=(0,d.useState)(!1),y=(0,c.p)(),[f,b]=(0,d.useState)([]),[S,_]=(0,d.useState)(!1),[h,x]=(0,d.useState)(0),A=(0,d.useCallback)((async e=>{_(!0);const[a,l]=await(0,v.WU)({id:i,sectionId:null===n||void 0===n?void 0:n.id,offset:e});var d,o;l&&y.open(null!==(d=null===l||void 0===l||null===(o=l.data)||void 0===o?void 0:o.message)&&void 0!==d?d:(0,C.eO)({key:"errorMessage",defaultTranslatedValue:r.p.Cards.error_message}));null!==a&&void 0!==a&&a.cards&&b((e=>[...e,...a.cards])),_(!1)}),[i,null===n||void 0===n?void 0:n.id,y]),D=(0,d.useCallback)((()=>{x((e=>e+s.default.LIMIT_10))}),[]),w=(0,d.useMemo)((()=>(null===f||void 0===f?void 0:f.map(((e,a)=>{const l=Object.assign(e);if(l.locked||l.isLocked){let e=0;f.slice(0,a).forEach((a=>{a.completionState!==s.default.COMPLETED&&a.cardType!==s.default.CARD_TYPE.POLL||e++})),e===a&&(l.isLocked=!1,l.locked=!1)}return l})))||[]),[f]);(0,d.useEffect)((()=>{T?A(h):(b([]),x(0))}),[A,T,h]);const M=(0,d.useMemo)((()=>{var e;return null===n||void 0===n||null===(e=n.pack_cards)||void 0===e?void 0:e.length}),[null===n||void 0===n||null===(a=n.pack_cards)||void 0===a?void 0:a.length]);return(0,k.jsxs)("div",{className:"edc-user-content-tab ".concat(T?"edc-pathway-accordion-opened":"edc-pathway-accordion-closed"),children:[(0,k.jsx)(o.JourneyPathwayDetailViewAccordion,{progressPercentage:null===n||void 0===n?void 0:n.completed_percentage,section:(0,C.eO)({key:"smartcardSection",defaultTranslatedValue:r.p.Cards.smartcard_section}),numberOfCards:M,isComplete:"COMPLETED"===(null===n||void 0===n?void 0:n.completionState),pathwayTitle:null===n||void 0===n?void 0:n.block_title,smartCards:[null],onExpand:p?()=>{}:()=>{g(!0)},onCollapse:()=>{g(!1)},isDisabled:p,smartCardTextLabel:(0,C.eO)({key:M>1?"smartCardTextLabel":"smartCardTextLabelSingular",defaultTranslatedValue:M>1?r.p.Cards.smart_card_text_label:u.w.Cards.smartCardTextSingularLabel}),progressTextLabel:(0,C.eO)({key:"Cards_smartcardProgressLabel",defaultTranslatedValue:r.p.Cards.smartcard_progress_label})}),T?(0,k.jsx)(j.Z,{isLoading:S,cards:w||[],total:null===n||void 0===n||null===(l=n.pack_cards)||void 0===l?void 0:l.length,offset:h,showCount:!1,showViewMore:(null===f||void 0===f?void 0:f.length)<(null===n||void 0===n||null===(t=n.pack_cards)||void 0===t?void 0:t.length),viewMoreCallback:D,onCardClick:e=>m(e,null===n||void 0===n?void 0:n.id,null===n||void 0===n?void 0:n.block_title)}):null]})},N=d.memo(L);var R=l(744),G=l(1178),B=l(2414);const W=()=>{var e,a;const{userInfo:l,orgInfo:i,ldFlags:n}=(0,d.useContext)(A.Il),u=(0,t.s0)(),{slug:g="",type:y=""}=(0,t.UO)(),f=(0,m.Th)(y,g),[b,S]=(0,d.useState)({}),[_,h]=(0,d.useState)(),[x,w]=(0,d.useState)({}),[M,V]=(0,d.useState)(!0),P=(0,d.useContext)(D.Z),L=(0,c.p)(),W=(0,d.useCallback)((async()=>{const[e,a]=await(0,v.aY)({url:f});e&&h(e),a&&L.open("Something went Wrong"),V(!1)}),[L,f]);(0,d.useEffect)((()=>{if(_){const{cardMetaData:e,permissions:a}=(0,m.mo)({cardData:_,userInfo:l,orgInfo:i,actionIcons:{is_liked:null===_||void 0===_?void 0:_.isUpvoted,is_bookmarked:null===_||void 0===_?void 0:_.isBookmarked}});S(a),w(e)}}),[_,i,l]);const Y=(null===_||void 0===_?void 0:_.cardType)===s.default.CARD_SUBTYPE.PATHWAY,H="".concat(s.default.PAGES.CARD_DETAILS,"/").concat(y,"/").concat(g),U=(0,d.useCallback)(((e,a,l)=>{e&&u(a?"".concat(H,"/").concat(a||l,"/cards/").concat(e):"".concat(H,"/0/cards/").concat(e))}),[H,u]),J=(0,d.useCallback)((async()=>{var e,a;if(null!==_&&void 0!==_&&_.id&&!_.completionState){const e=(0,m.fm)(null===_||void 0===_?void 0:_.id);await(0,R.x)({url:e,requestType:s.default.HTTP_METHOD.PUT})}const l=_&&Array.isArray(_.packCards)&&_.packCards?null===(e=_.packCards)||void 0===e?void 0:e.find((e=>e.completionState!=s.default.COMPLETED)):null;if(l)return void U(l.id);const d=Array.isArray(_.journeySection)?null===(a=_.journeySection)||void 0===a?void 0:a.map((e=>{var a;return null===(a=e.pack_cards)||void 0===a?void 0:a.map((a=>({...a,sectionId:e.id})))})).flat():null,o=null===d||void 0===d?void 0:d.find((e=>e.completionState!=s.default.COMPLETED));o&&U(o.id,o.sectionId)}),[_,U]),F=(0,d.useMemo)((()=>_&&(0,G.k)({card:_,cardType:null===_||void 0===_?void 0:_.cardType,userInfo:l,ldFlags:n})),[_,l,n]),Z=(0,d.useMemo)((()=>_&&(0,B.nE)({card:_,cardType:null===_||void 0===_?void 0:_.cardType,userInfo:l,permissions:b,ldFlags:n})),[_,n,b,l]),Q=(0,d.useCallback)((e=>{h((a=>({...a,commentsCount:a.commentsCount+e})))}),[h]),q=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],l=!1;return 0===e?l=!0:a.length&&a.length>0&&(l=a.every((e=>e.completed_percentage&&100===e.completed_percentage))),l},K=(null===l||void 0===l?void 0:l.id)===(null===_||void 0===_||null===(e=_.author)||void 0===e?void 0:e.id),z=((e,a)=>{if(e===s.default.PROGRESSIVE_UNLOCKING&&a){let e={};for(const[l,d]of a.entries()){const o=a.slice(0,l);e[d.id]=q(l,o)}return e}if("weekly"===e){let e={};for(const[,l]of a.entries())if(K)e[l.id]=!0;else{const a=P(l.start_date);e[l.id]=a.isBefore(P())}return e}})(null===_||void 0===_?void 0:_.cardSubtype,null===_||void 0===_?void 0:_.journeySection),X=(0,d.useMemo)((()=>{var e;return(null===_||void 0===_||null===(e=_.packCards)||void 0===e?void 0:e.map(((e,a)=>{const l=Object.assign(e);if(l.locked||l.isLocked){let e=0;(null===_||void 0===_?void 0:_.packCards.slice(0,a)).forEach((a=>{a.completionState!==s.default.COMPLETED&&a.cardType!==s.default.CARD_TYPE.POLL||e++})),e===a&&(l.isLocked=!1,l.locked=!1)}return l})))||[]}),[null===_||void 0===_?void 0:_.packCards]);return(0,d.useEffect)((()=>{f&&W()}),[W,f]),!M&&_?(0,k.jsxs)("div",{className:"edc-px-1 edc-py-1 edc-pathway-detail-view",children:[(0,k.jsx)("div",{children:(0,k.jsx)(I.Z,{})}),(0,k.jsx)(E,{journeyData:_,setData:h,isPathway:Y,onProgressBtnClick:J,isCompleted:F,permissions:b,setPermissions:S,cardMetaData:x,setJourneyData:h}),y!==s.default.CARD_SUBTYPE.PATHWAY?null===_||void 0===_||null===(a=_.journeySection)||void 0===a?void 0:a.map(((e,a)=>{var l;return(0,k.jsx)("div",{className:"edc-my-1 edc-paper box-shadow",children:(0,k.jsx)(N,{id:_.id,sectionData:e,handleCardClick:U,isDisabled:z&&!z[e.id]||!e.visible,subtype:_.cardSubtype})},null!==(l=e.id)&&void 0!==l?l:a)})):(0,k.jsx)("div",{className:"edc-user-content-tab edc-mb-2 edc-my-1 edc-paper",children:(0,k.jsx)(j.Z,{isLoading:M,cards:X||[],total:null===X||void 0===X?void 0:X.length,offset:0,showCount:!1,onCardClick:e=>U(e)})}),(0,k.jsx)("div",{className:"edc-pathway-footer-container",children:(0,k.jsx)(T,{journeyData:_,isCompleted:F,setData:h,cardMetaData:x,permissions:b,isMarkAsCompleteEnabled:Z,orgConfigs:(0,p.c3)(i)})}),b.isCommentCardEnabled&&(0,k.jsx)("div",{className:"edc-card-detail-view-comment-container",children:(0,k.jsx)(O.Z,{id:_.id,setCommentCount:Q})})]}):(0,k.jsx)(o.Spinner,{variant:"lg",spinnerMessage:(0,C.eO)({key:"loading",defaultTranslatedValue:r.p.Cards.loading})})}}}]);