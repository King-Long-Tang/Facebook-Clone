import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import UserWidget from "../widgets/UserWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import AdvertWidget from "../widgets/AdvertWidget";
import FriendListWidget from "../widgets/FriendListWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Box position="fixed" top="0" left="0" width="100%" zIndex="1000">
        <Navbar />
      </Box>

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
        mt="4rem" // Adjust for the height of the Navbar
      >
        {/* Left Sidebar */}
        <Box  
          flexBasis={isNonMobileScreens ? "26%" : undefined} 
          position={isNonMobileScreens ? "sticky" : "static"}
          top="4rem" // Align with the bottom of the Navbar
        >
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>

        {/* Main Content Area */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>

        {/* Right Sidebar */}
        {isNonMobileScreens && (
          <Box
            flexBasis="26%"
          >
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}

      </Box>
    </Box>
  );
};

export default HomePage;
