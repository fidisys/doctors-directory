import React from 'react';
import { useHistory } from "react-router-dom";
import {
  InfoPage
} from '@fidisys-oss/design-system';

import { bookingInfo } from '../../data/bookingInfo';
import { rating } from '../../data/rating';
import { resume } from '../../data/resume';
import { reviews } from '../../data/reviews';
import { userDetails } from '../../data/userDetails';

import {
  ProfileContainer
} from './styles';

const ProfilePage = props => {

  const history = useHistory();

  const bookAppointment = data => {
    console.log(data);
  };

  const backArrow = () => {
    history.push('/results');
  };

  const toHome = () => {
    history.push("/");
  };

  return (
    <ProfileContainer>
      <InfoPage
        logoClick={toHome}
        bookingInfo={bookingInfo}
        ratingListData={rating}
        requestAppointment={bookAppointment}
        resumeDetailsData={resume}
        reviewsListData={reviews}
        userDetailsData={userDetails}
        backArrow={backArrow}
      />
    </ProfileContainer>
  );
};

export default ProfilePage;
