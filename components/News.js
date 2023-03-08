import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const NewsTitle = styled.h1`
  margin: 0 auto;
  padding: 20px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;




const NewsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  max-width: 1200px;
`;

const NewsItem = styled.li`
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 40px;
  perspective: 1000px;
  transition: transform 0.5s, box-shadow 0.5s;
  margin: 20px;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.backgroundImage});

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const NewsLink = styled.a`
  font-size: 1.2em;
  font-weight: bold;
  color: black;
  text-decoration: none;
  transition: color 0.2s;
`;

const NewsDescription = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.textColor};
  margin-top: 10px;
`;

const NewsLinkWrapper = styled(NewsLink)`
  display: block;
  width: 100%;
  height: 100%;
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 20px;
  }

  @media screen and (min-width: 768px) {
    .slick-slide > div {
      margin: 0 30px;
    }
  }
`;

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, error };
}

export default function News() {
  const [items, setItems] = useState([]);
  const [themeMode, setThemeMode] = useState("light");
  const { data, error } = useFetch(
    "https://api.github.com/users/octocat/repos"
  );

  useEffect(() => {
    // Define the URL of the RSS feed
    const rssUrl = "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
    // Fetch the RSS feed and parse it to JSON
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
      .then((res) => res.json())
      .then((data) => {
        // Extract the news items from the parsed JSON
        const newsItems = data.items.map((item) => ({
          title: item.title,
          link: item.link,
          description: item.description,
          picture: item.srcset // Add thumbnail property
        }));

        // Set the news items to state
        setItems(newsItems);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <NewsContainer>
      <div className="max-w-6xl mx-auto h-48 bg-[#F4F3EE] dark:bg-[#1F1F1F]">
        <h1 className=" text-6xl md:text-20xl font-bold py-3 text-center dark-[#1F1F1F] md:text-left flex justify-center items-center">
        <NewsTitle>Recent News in Tech!</NewsTitle>
        </h1>
      </div>
    
      <NewsList>
        {error && <p>{error}</p>}
        {!data ? (
          <p>Loading...</p>
        ) : (
          <StyledSlider
            dots
            infinite
            speed={50}
            slidesToShow={2}
            slidesToScroll={2}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                },
              },
            ]}
          >
            {items.map((item) => (
              <NewsItem key={item.title} backgroundImage={item.srcset}>

                <NewsLinkWrapper href={item.link} target="_blank">
                  <h2>{item.title}</h2>
                  <NewsDescription>{item.description}</NewsDescription>
                </NewsLinkWrapper>
              </NewsItem>
            ))}
          </StyledSlider>
        )}
      </NewsList>
    </NewsContainer>
  );
}