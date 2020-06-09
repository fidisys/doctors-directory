import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {
  InfoPage
} from '@fidisys-oss/design-system';

const ProfilePage = props => {

  const location = useLocation();

  const[profile, setProfile] = useState({});

  const[loader, setLoader] = useState(true);

  useEffect(() => {
    if(location.state.data) {
      const profileData = location.state.data;
      profileData.userdetails = {
        address: profileData.address,
        category: profileData.category,
        image: profileData.image,
        key: profileData.key,
        linkedin: profileData.linkedin,
        location: profileData.location,
        name: profileData.name,
        phone: profileData.phone,
        qualification: profileData.qualification,
        rating: profileData.rating,
        share: profileData.share,
        speciality: profileData.speciality,
        twitter: profileData.twitter
      }
      setProfile(profileData);
      setLoader(false);
    }
  }, []);

  const history = useHistory();

  const bookAppointment = data => {
    console.log(data);
  };

  const backArrow = () => {
    var path;
    if(location.state.filter.state.length > 0) {
      path = "/results";
      var search = "?state="+location.state.filter.state[0];
    } else {
      path = "/results";
    }
    history.push({
      pathname: path,
      search: search,
      state: { filter: location.state.filter }
    });
  };

  const toHome = () => {
    history.push("/");
  };

  return (
    <Fragment>
      {
        !loader &&
        <InfoPage
          logoClick={toHome}
          bookingInfo={profile.bookingInfo}
          ratingListData={profile.ratings}
          requestAppointment={bookAppointment}
          resumeDetailsData={profile.resume}
          reviewsListData={profile.reviews}
          userDetailsData={profile.userdetails}
          backArrow={backArrow}
        />
      }
    </Fragment>
  );
};

export default ProfilePage;
