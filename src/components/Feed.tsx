import React from 'react';
import TopBar from './TopBar';
import { List } from 'antd';
import PostCard from './PostCard';
import './Feed.css';

interface Post {
  id: number;
  user: string;
  avatar: string;
  caloriesBurned: number;
  duration: string;
  workoutType: string;
  date: string;
  description: string;
}

const samplePosts: Post[] = [
    {
      id: 1,
      user: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
      caloriesBurned: 500,
      duration: '1h 30m',
      workoutType: 'Running',
      date: '2024-09-18',
      description: 'Had a great run today in the park!',
    },
    {
      id: 2,
      user: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
      caloriesBurned: 300,
      duration: '45m',
      workoutType: 'Yoga',
      date: '2024-09-17',
      description: 'Relaxing yoga session.',
    },
    {
        id: 3,
        user: 'Alice Johnson',
        avatar: 'https://i.pravatar.cc/150?img=3',
        caloriesBurned: 700,
        duration: '2h',
        workoutType: 'Cycling',
        date: '2024-09-16',
        description: 'Went cycling around the city.',
    },
    {
        id: 4,
        user: 'Bob Brown',
        avatar: 'https://i.pravatar.cc/150?img=4',
        caloriesBurned: 400,
        duration: '1h',
        workoutType: 'Swimming',
        date: '2024-09-15',
        description: 'Swam a few laps at the pool.',
    }
    // Add more posts as needed
  ];

const Feed: React.FC = () => {
  return (
    <div className="page-content">
      <TopBar title="Feed" />
      <div className="feed-container">
        <List
          dataSource={samplePosts}
          renderItem={(post) => (
            <PostCard key={post.id} post={post} />
          )}
        />
      </div>
    </div>
  );
};

export default Feed;
