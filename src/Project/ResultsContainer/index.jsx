import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../shared/utils/api';
import MixpanelService from '../../shared/services/MixpanelService';

import { GiftWrapper, GiftCard, GiftLink, GiftImage, GiftLabel, SeeMore } from './Styles';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingFn: PropTypes.func.isRequired,
  criteria: PropTypes.object.isRequired,
  moveForward: PropTypes.func.isRequired
};

const ResultsContainer = ({ isLoading, loadingFn, criteria, moveForward }) => {
  const getEtsyData = async (giftParams, limit = 100, offset = 0) => {
    const { giftType, occasion, priceRange } = giftParams;

    const params = {
      limit,
      taxonomy_id: giftType.id,
      offset,
      min_price: priceRange.min,
      max_price: priceRange.max
    };

    if (occasion.id !== 'Just Because') {
      params.tags = occasion.id;
    }

    try {
      const results = await api(params);

      return results;
    } catch (error) {
      throw new Error(error);
    }
  };

  const trackResultsClick = (url) => {
    MixpanelService.track('Redirect to etsy from image', {
      url
    });
  };

  const [gifts, setGifts] = useState([]);
  const [pageOffset, setpageOffset] = useState(0);
  const [isFetchingMore, setisFetchingMore] = useState(false);

  useEffect(() => {
    async function displayResults() {
      const data = await getEtsyData(criteria, 100, pageOffset);

      if (isLoading) {
        loadingFn(false);
        moveForward();
        MixpanelService.track('View results page', {
          numberResults: data?.count
        });
      }

      setpageOffset(data?.pagination?.next_offset);
      setisFetchingMore(false);
      setGifts((prevData) => [...prevData, ...data.results]);
    }

    if (isLoading || isFetchingMore) {
      displayResults();
    }
  }, [isLoading, isFetchingMore]);

  return (
    <>
      {gifts.length > 0 && (
        <>
          <GiftWrapper>
            {gifts.map((gift) => {
              return (
                <GiftLink
                  key={gift.id}
                  href={gift.url}
                  onClick={() => trackResultsClick(gifts.url)}
                  target="_blank"
                >
                  <GiftCard>
                    <GiftImage src={gift?.Images[0].url_570xN} />
                    <GiftLabel>{gift.title}</GiftLabel>
                  </GiftCard>
                </GiftLink>
              );
            })}
          </GiftWrapper>
          {pageOffset > 0 && <SeeMore onClick={() => setisFetchingMore(true)}>See More</SeeMore>}
        </>
      )}
    </>
  );
};

ResultsContainer.propTypes = propTypes;

export default ResultsContainer;
