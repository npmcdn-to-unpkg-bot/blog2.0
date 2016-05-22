# blog2.0
Creating a blog project in Angular 2. While I'm not a licensed blogger, I feel this is a
    suitable project to get an interactive introduction to the world of Angular, Express,
    and Node-based scripting.



Gulp is used to compile all files.

In CMD line run:  
       
            npm run gulp
            
            
To start server:

            npm start
        
        
Project runs on localhost: 3000


Project notes:

        (5/21/16):  Added new components to free up App Component. These include footer, and
                    content components.

        (5/22/16):  Added service to handle blogPost return. Content component retrieves data
                    via ngOnit method. This is in turn injected to the body-content component,
                    which handles individual blog content in the body.

                    Moved mock blog posts to its own file as I brace for an inevitable clash
                    with databases.

Needs:

    * Routing has not been added....HOME and ABOUT links exist but are not hooked up. Any reloads
      must be currently done via browser refresh.

    * CSS styling needs a lot of work. The header and subheader is a little small.

    * Still not sure about styling, indention, images, etc.. of blog content(body).

