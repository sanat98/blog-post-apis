# blog-post-apis
blog post apis using express and firebase<br>
Babel ready.<br>
Steps to use :- <br>
1. clone the repo<br>
2. install node modules<br>
 --base url: http://localhost:4000/api/post/ <br>

 i. create: http://localhost:4000/api/post/  <br>
 ii. get one by docId : http://localhost:4000/api/post/:"DOC_ID" <br>
 iii. get all: http://localhost:4000/api/post <br>
 iv. update (auth header required): http://localhost:4000/api/post/:"ID" <br>
 v.  delete (auth header required): http://localhost:4000/api/post/:"ID" <br>
 --to get the all document of a particular user : <br>
 vi. http://localhost:4000/api/post/getByUserId/:'USERID' <br>

 :ledger: ** And to update and delete : add plain "USERID" in auth header as bearer token **
