import React, { useState } from "react";
import {
  Play,
  X,
  Heart,
  Share2,
  Eye,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import styles from "../Port/Portfolio.module.css";

import img1 from "../../../public/i-6.png";
import img2 from "../../../public/s-4.png";
import img3 from "../../../public/s-5.png";
import img4 from "../../../public/Browns-1.jpg";
import img5 from "../../../public/JetwingSus-1.png";
import img6 from "../../../public/i-4.png"; // Example image, replace with actual images
import img7 from "../../../public/i-9.jpg";
import img8 from "../../../public/i-10.jpg";
import img9 from "../../../public/shihinen.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  const categories = [
    "All",
    "Corporate",
    "Documentary",
    "Music",
    "Event",
    "Commercial",
    "Podcast",
  ];

  const videos = [
    {
      id: "1",
      title: "University of Westminster - Graduation",
      category: "Event",
      thumbnail: img1,
      youtubeId: "dHhqb2RK8X4",
      description:
        "Capturing the joy and achievement of graduation day at the University of Westminster, UK.",
      duration: "3:45",
      views: "12.5K",
      likes: 245,
    },
    {
      id: "2",
      title: "Jetwing Hotels - Solar Power Initiative",
      category: "Corporate",
      thumbnail: img5,
      youtubeId: "YbB5GMy-VUk?si=lfBmhutDD0nbM4Y-",
      description: "Jetwing Hotels Increased Reliance on Solar Power",
      duration: "3:04",
      views: "2.84K",
      likes: 189,
    },
    {
      id: "3",
      title: "Celebrating Women's Day",
      category: "Documentary",
      thumbnail: img3,
      youtubeId: "3cZRmQL-DH0?si=hXBcIb87WavYWqOB",
      description:
        "A documentary celebrating the achievements and stories of inspiring women.",
      duration: "5:12",
      views: "15.7K",
      likes: 342,
    },
    {
      id: "4",
      title: "All Ears - Podcast Series by Browns Hotels & Resorts",
      category: "Podcast",
      thumbnail: img4,
      youtubeId: "MJ9XSk-JqHU?si=95flwUnrAyi6cxzt",
      description: "Meet Sri Lanka’s Elephant Experts: All Ears Episode 001",
      duration: "4:18",
      views: "22.1K",
      likes: 456,
    },
    {
      id: "5",
      title: "Highlights - DevFest Sri Lanka 2024",
      category: "Event",
      thumbnail: img6,
      youtubeId: "EHo5baedp3g?si=vPbqJFQzMLkGjTSw",
      description:
        "That's a wrap! GDG DevFest Sri Lanka 2024 was an unforgettable celebration of tech, innovation, and community!",
      duration: "1:47",
      views: "18.9K",
      likes: 398,
    },
    {
      id: "6",
      title: "Spa Ceylon Homeware",
      category: "Commercial",
      thumbnail: img7,
      youtubeId: "hMW8p5GSXYU?si=TzGETJNxT0JH8jBw",
      description:
        "Spa Ceylon Homeware, Where Luxury meets homeware.Ft Saranga & Dinakshi",
      duration: "8:24",
      views: "9.8K",
      likes: 267,
    },
    {
      id: "7",
      title: "BYD - EV Motor Show '24",
      category: "Podcast",
      thumbnail:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      youtubeId: "dQw4w9WgXcQ",
      description: "Behind the scenes look at the future of electric mobility.",
      duration: "3:52",
      views: "9.8K",
      likes: 267,
    },
    {
      id: "8",
      title: "Spa Ceylon එක්ක එකතු වුණු අපේ පුංචි අමුත්තිය!",
      category: "Podcast",
      thumbnail: img8,
      youtubeId: "dQw4w9WgXcQ",
      description: "Spa Ceylon Good Living Channel",
      duration: "13:12",
      views: "21K",
      likes: 267,
    },
    {
      id: "9",
      title: "Sihinen (සිහිනෙන්) - Dasun Madushan | Cover by Hot Chocolate",
      category: "Music",
      thumbnail: img9,
      youtubeId: "Mn7I6mDP-2c?si=9YzAyEef_n0X0uZ1",
      description:
        "Sihinen (සිහිනෙන්) - Dasun Madushan | Cover by Hot Chocolate",
      duration: "3:51",
      views: "9.8K",
      likes: 267,
    },
  ];

  const collageImages = [];

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  const handleWatchVideo = (video) => {
    setSelectedVideo(video);
    const index = filteredVideos.findIndex((v) => v.id === video.id);
    setCurrentPlaylistIndex(index);
  };

  const handleNextVideo = () => {
    if (currentPlaylistIndex < filteredVideos.length - 1) {
      const nextIndex = currentPlaylistIndex + 1;
      setCurrentPlaylistIndex(nextIndex);
      setSelectedVideo(filteredVideos[nextIndex]);
    }
  };

  const handlePreviousVideo = () => {
    if (currentPlaylistIndex > 0) {
      const prevIndex = currentPlaylistIndex - 1;
      setCurrentPlaylistIndex(prevIndex);
      setSelectedVideo(filteredVideos[prevIndex]);
    }
  };

  const handleLikeVideo = (videoId, e) => {
    e.stopPropagation();
    const newLikedVideos = new Set(likedVideos);
    if (likedVideos.has(videoId)) {
      newLikedVideos.delete(videoId);
    } else {
      newLikedVideos.add(videoId);
    }
    setLikedVideos(newLikedVideos);
  };

  const handleShareVideo = (video, e) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        navigator.share({
          title: video.title,
          text: video.description,
          url: `https://youtube.com/watch?v=${video.youtubeId}`,
        });
      } catch (error) {
        navigator.clipboard.writeText(
          `https://youtube.com/watch?v=${video.youtubeId}`
        );
        throw new Error(error);
      }
    } else {
      navigator.clipboard.writeText(
        `https://youtube.com/watch?v=${video.youtubeId}`
      );
    }
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className={styles.portfolio}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Your story deserves
          <br />
          to look this stunning
        </h1>
      </div>
      {/* Image Collage */}
      <div className={styles.collage}>
        {collageImages.map((image, index) => (
          <div key={index} className={styles[`collageItem${index + 1}`]}>
            <img src={image} alt={`Portfolio ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Video Portfolio Section */}
      <div className={styles.videoSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Commercial & Brand Videos</h2>
          <div className={styles.viewControls}>
            <button
              className={`${styles.viewButton} ${
                isGridView ? styles.active : ""
              }`}
              onClick={() => setIsGridView(true)}
            >
              Grid
            </button>
            <button
              className={`${styles.viewButton} ${
                !isGridView ? styles.active : ""
              }`}
              onClick={() => setIsGridView(false)}
            >
              List
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div
          className={`${styles.videoGrid} ${
            !isGridView ? styles.listView : ""
          }`}
        >
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className={styles.videoCard}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className={styles.videoThumbnail}>
                <img src={video.thumbnail} alt={video.title} />

                {/* Duration Badge */}
                <div className={styles.durationBadge}>
                  <Clock size={12} />
                  {video.duration}
                </div>

                {/* Hover Overlay */}
                <div className={styles.playOverlay}>
                  <button
                    className={styles.playButton}
                    onClick={() => handleWatchVideo(video)}
                  >
                    <Play size={24} />
                  </button>
                </div>

                <button
                  className={styles.watchButton}
                  onClick={() => handleWatchVideo(video)}
                >
                  Watch
                </button>
              </div>

              <div className={styles.videoInfo}>
                <div className={styles.videoHeader}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <div className={styles.videoActions}>
                    <button
                      className={`${styles.actionButton} ${
                        likedVideos.has(video.id) ? styles.liked : ""
                      }`}
                      onClick={(e) => handleLikeVideo(video.id, e)}
                    >
                      <Heart size={16} />
                      {video.likes + (likedVideos.has(video.id) ? 1 : 0)}
                    </button>
                    <button
                      className={styles.actionButton}
                      onClick={(e) => handleShareVideo(video, e)}
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                <div className={styles.videoStats}>
                  <span className={styles.viewCount}>
                    <Eye size={14} />
                    {video.views} views
                  </span>
                  <span className={styles.category}>{video.category}</span>
                </div>

                <p className={styles.videoDescription}>{video.description}</p>

                {hoveredVideo === video.id && (
                  <div className={styles.quickActions}>
                    <button onClick={() => handleWatchVideo(video)}>
                      Watch Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className={styles.viewAllButton}>View all Projects</button>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className={styles.videoModal} onClick={closeVideoPlayer}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeVideoPlayer}>
              <X size={24} />
            </button>

            <div className={styles.videoPlayer}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className={styles.videoDetails}>
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
              <span className={styles.category}>{selectedVideo.category}</span>
            </div>

            <div className={styles.playlistControls}>
              <button
                onClick={handlePreviousVideo}
                disabled={currentPlaylistIndex === 0}
                className={`${styles.navButton} ${styles.prevButton}`}
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <span className={styles.playlistInfo}>
                {currentPlaylistIndex + 1} of {filteredVideos.length}
              </span>

              <button
                onClick={handleNextVideo}
                disabled={currentPlaylistIndex === filteredVideos.length - 1}
                className={`${styles.navButton} ${styles.nextButton}`}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
            {/* Related Videos Sidebar */}
            <div className={styles.relatedVideos}>
              <h4>Up Next</h4>
              {filteredVideos
                .slice(currentPlaylistIndex + 1, currentPlaylistIndex + 4)
                .map((video, index) => (
                  <div
                    key={video.id}
                    className={styles.relatedVideoItem}
                    onClick={() => {
                      setSelectedVideo(video);
                      setCurrentPlaylistIndex(currentPlaylistIndex + index + 1);
                    }}
                  >
                    <img src={video.thumbnail} alt={video.title} />
                    <div className={styles.relatedVideoInfo}>
                      <h5>{video.title}</h5>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
