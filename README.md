# web-ytdl
In-Browser YouTube Video downloader! No backend. Only requires CORS Policy disabled in browser(guide included).

# Demo
You can see the demo [here](mrcheateugene.github.io/web-ytdl/index.html)

# How it works

The project is based on YTDL-Core NPM package, and it is used in the web trough Browserify.</br>
Frontend is written in pure JS, with some help of Bootstrap 5.

# The main issue that can't be solved

The main idea of this project - no server resources are used at all. </br>
**Every request should look like it's coming from user's device.**</br>
</br>
But, the Cross-Origin Resource Sharing policy doesn't allow any website access some other websites, if they don't send an allow cross-origin header. Which YouTube doesn't send. </br>
So, as a workaround - if user has CORS policy not unblocked, he'll be provided with an warning sign, that explains how to unblock CORS policy(basically, install an browser extension). </br>
