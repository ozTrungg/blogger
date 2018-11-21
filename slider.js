// Written by XOmisse for xomisse.com
// Do NOT remove credits
var showpostthumbnails=!0;var showpostsummary=!0;var random_posts=!1;var numchars=100;var numposts=10;function showgalleryposts(json){var numPosts=json.feed.openSearch$totalResults.$t;var indexPosts=new Array();document.write('<ul>');for(var i=0;i<numPosts;++i){indexPosts[i]=i}
if(random_posts==!0){indexPosts.sort(function(){return 10-Math.random()})}
if(numposts>numPosts){numposts=numPosts}
for(i=0;i<numposts;++i){var entry=json.feed.entry[indexPosts[i]];var posttitle=entry.title.$t;
if(typeof cate=='undefined'){var cate="uncategorised"}else{var cate=json.feed.entry[i].category[0].term}
for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}
if("content" in entry){var postcontent=entry.content.$t}
s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){var thumburl=d}else var thumburl='//placehold.it/1000x300';document.write('<li><div class="cycle-slideshow"><a href="'+posturl+'"><div class="slide-image" style="background-image:url('+thumburl+');"/><div class="slide-inside"><div class="slide-title">');document.write('<div class="slide-container">');document.write('<div class="slide-cat">'+cate+'</div>');document.write('<div class="slide-h2">'+posttitle+'</div>');var
 re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");if(showpostsummary==!0){if(postcontent.length<numchars){document.write('<div class="slide-excerpt">'+postcontent+'... </div>')}else{postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontentl=postcontent.substring(0,quoteEnd);document.write('<div class="slide-excerpt">'+postcontent+'... </div>')}
document.write('<div class="slide-divider"></div>');document.write('<div class="slide-more">Read More</div></div></div></div>')}
document.write('</a></div></li>')}
document.write('</ul>');document.write("<div class='cycle-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></div><div class='cycle-next'><i class='fa fa-angle-right' aria-hidden='true'></i></div>")}
