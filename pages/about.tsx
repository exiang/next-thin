import { query , ensureIsUser, getCurrentUser, initThinBackend } from 'thin-backend';
import { useQuery, useCurrentUser } from 'thin-backend/react';
import { useEffect, useState } from 'react';
import { logout } from 'thin-backend';

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

function Blog({}) {
    const user = useCurrentUser();

    return <div>
        <div>Hello {user?.email}</div>
        <button onClick={logout}>Logout</button>
    </div>
}

/* EXAMPLE:
function Posts() {
    const posts = useQuery(query('posts'));
    if (posts === null) {
        return <div>Loading</div>
    }
    return <div>{posts.map(post => <Post post={post} key={post.id} />)}</div>
}

interface PostProps {
    post: Post;
}

function Post({ post }: PostProps) {
    return <div>{post.title}</div>
}
*/

export default Blog;