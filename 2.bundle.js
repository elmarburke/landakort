webpackJsonp([2],{13:function(t,e,n){var i=n(25),o=n(38);t.exports=i.extend({pageTitle:"home",template:o,bindings:{"model.user.profile_url":[{type:"attribute",hook:"profile-name",name:"href"},{type:"attribute",hook:"profile-image-link",name:"href"}],"model.user.fullname":{hook:"profile-name"},"model.user.userpic_url":{type:"attribute",hook:"profile-image",name:"src"},"model.name":[{hook:"image-title"},{type:"attribute",hook:"image-title",name:"title"}],"model.page_url":[{type:"attribute",hook:"photo-page",name:"href"},{type:"attribute",hook:"image-title",name:"href"}],"model.big_image_url":{type:"attribute",hook:"photo",name:"src"},"model.rating":{hook:"rating"},"model.highest_rating":{hook:"highest-rating"}},initialize:function(t){var e=this;app.photos.getOrFetch(t.id,function(n,i){n&&alert("couldnt find a model with id: "+t.id),e.model=i})}})},25:function(t,e,n){var i=n(19);t.exports=i.extend({registerKeyboardShortcuts:function(){},unregisterKeyboardShortcuts:function(){}})},38:function(t){t.exports='<section class="page photo"><header><a href="#/" class=back><span class="fa fa-chevron-left"></span></a><div class=title><h1><a data-hook=image-title target=_blank></a></h1><h2><a data-hook=profile-name target=_blank></a></h2></div><a data-hook=profile-image-link target=_blank><img data-hook=profile-image></a></header><div class=photo><a data-hook=photo-page target=_blank><img data-hook=photo></a></div><dl><dt>Rating</dt><dd><span data-hook=highest-rating></span> (<span data-hook=rating></span>)</dd></dl></section>'}});
//# sourceMappingURL=2.bundle.js.map