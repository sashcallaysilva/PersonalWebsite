/**
 * In backend, a controller is a JavaScript file that contains
 * a set of methods, called actions, which are executed by the 
 * client according to the requested route. These actions 
 * perform the business logic code and send back the response. 
 * Controllers represent the C in the model-view-controller 
 * (MVC) pattern.
 */

export const getBlogs = (req, res) => {
    res.json([
        {
            title: 'My First Blog',
            slug: 'first-blog'
        }
    ]);
};