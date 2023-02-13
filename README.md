# blog-post-apis
blog post apis using express and firebase
Babel ready.
Steps to use :- 
1. clone the repo
2. install node modules
 --base url: http://localhost:4000/api/post/

 i. create: http://localhost:4000/api/post/ 
 ii. get one by docId : http://localhost:4000/api/post/:"DOC_ID" 
 iii. get all: http://localhost:4000/api/post
 iv. update (auth header required): http://localhost:4000/api/post/:"ID"
 v.  delete (auth header required): http://localhost:4000/api/post/:"ID"
 --to get the all document of a particular user : 
 vi. http://localhost:4000/api/post/getByUserId/:'USERID'

 :ledger: ** And to update and delete : add plain "USERID" in auth header as bearer token **
