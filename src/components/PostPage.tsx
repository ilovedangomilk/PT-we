import React from 'react';
import TopBar from './TopBar';

const PostPage: React.FC = () => {
  return (
    <div className="page-content">
      <TopBar title="Create Post" />
      <div className="content-area">
        {/* Add content for creating a post */}
        <h2>Create a New Post</h2>
      </div>
    </div>
  );
};

export default PostPage;
