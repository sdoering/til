2016/02/17:

I learned, that you have to set s.abort(); in the Adobe Analytics Tool, to make sure, that the Tool does not initiate a page view tracking, even if all page load rules are deactivated. 

Why the heck does the Adobe Analytics Tool in the DTM fire a page tracking on load? 

Non the less: Set s.abort() after initializing a s-object in the custom page code and you are fine. 
