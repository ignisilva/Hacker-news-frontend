import Layout from "../components/utils/Layout";
import Profile from "../components/Profile";
import HeaderNav from "../components/common/HeaderNav";
import useColorMode from "../hooks/useColorMode";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getProfile as getProfileSaga } from "../redux/modules/profile";

const ProfileContainer = (props) => {
  const [colorMode, colorLight, colorDark] = useColorMode();

  const { profile, loading, error } = useSelector((state) => state.profile);

  const { userId } = useParams();

  const dispatch = useDispatch();

  const getProfile = useCallback(
    (userId) => {
      dispatch(getProfileSaga(userId));
    },
    [dispatch]
  );

  return (
    <Layout>
      <HeaderNav
        colorMode={colorMode}
        colorLight={colorLight}
        colorDark={colorDark}
        selectedNav={userId}
      />
      <Profile
        colorMode={colorMode}
        loading={loading}
        userId={userId}
        profile={profile}
        getProfile={getProfile}
      />
    </Layout>
  );
};

export default ProfileContainer;
