import { Blogcard } from "../components/Blogcard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {
    const {loading,blogs} = useBlogs();
    if(loading){
        return <div>
            <Appbar/>
            <div className="flex justify-center">
                <div>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                </div>
            </div>
        </div>
    }
        return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <Blogcard 
                id = {blog.id} authorName={blog.author.name || "Anonymous"} title = {blog.title} publishDate={"3 Aug 2024"} content = {blog.content} /> )}
            </div>
        </div>
    </div>
}