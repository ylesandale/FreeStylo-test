import React from "react";
import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";

import {
  setStartFavoriteVideo,
  onDeleteFavoriteVideo,
} from "../redux/appReducer";

const favorites: React.FC = () => {
  const dispatch = useDispatch();
  const favoriteVideos: Video[] | any[] = useSelector(
    (state: StateSelector) => state.app.favoriteVideos
  );

  React.useEffect(() => {
    const localFavoriteVideos = JSON.parse(
      localStorage.getItem("favoriteVideos")
    );
    dispatch(setStartFavoriteVideo(localFavoriteVideos));
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem("favoriteVideos", JSON.stringify(favoriteVideos));
  }, [favoriteVideos]);

  const onDelete = (payload: string, e: any) => {
    if (
      window.confirm("Вы действительно хотите удалить это видео из избранного?")
    ) {
      e.preventDefault();
      dispatch(onDeleteFavoriteVideo(payload));
    }
  };

  const getPreviw = (preview: string) => {
    const width = "350";
    const height = "250";
    return preview.replace("%{width}x%{height}", `${width}x${height}`);
  };
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main__content">
          <div className="content">
            {favoriteVideos.length ? (
              favoriteVideos.map((video: Video) => (
                <div key={video.id} className="content__item">
                  <a target="_blank" href={video.url} rel="noreferrer">
                    <img
                      src={getPreviw(video.thumbnail_url)}
                      alt="Video prev"
                    />
                    <h2>{video.title}</h2>
                    <i
                      className={classNames({
                        active: video.favoriteVideo,
                      })}
                      onClick={(e: any) => onDelete(video.id, e)}
                    >
                      <svg
                        height="32"
                        viewBox="0 -10 511.98645 511"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m499.574219 188.503906c-3.199219-9.921875-11.988281-16.9375-22.398438-17.898437l-141.355469-12.84375-55.894531-130.835938c-4.117187-9.578125-13.503906-15.765625-23.933593-15.765625-10.433594 0-19.820313 6.207032-23.9375 15.808594l-55.890626 130.816406-141.378906 12.839844c-10.386718.941406-19.175781 7.957031-22.378906 17.878906-3.21875 9.921875-.234375 20.777344 7.617188 27.648438l106.859374 93.695312-31.511718 138.773438c-2.300782 10.199218 1.664062 20.734375 10.136718 26.878906 4.519532 3.328125 9.875 4.992188 15.230469 4.992188 4.628907 0 9.238281-1.234376 13.355469-3.710938l121.898438-72.894531 121.875 72.875c8.917968 5.351562 20.160156 4.882812 28.609374-1.238281 8.46875-6.144532 12.4375-16.683594 10.132813-26.882813l-31.507813-138.769531 106.859376-93.699219c7.847656-6.867187 10.835937-17.726563 7.613281-27.667969zm0 0"
                          fill="transparent"
                        />
                        <path
                          d="m114.617188 491.136719c-5.632813 0-11.203126-1.746094-15.957032-5.183594-8.855468-6.398437-12.992187-17.429687-10.582031-28.09375l32.9375-145.066406-111.703125-97.964844c-8.210938-7.1875-11.347656-18.515625-7.976562-28.90625 3.371093-10.367187 12.542968-17.726563 23.402343-18.730469l147.820313-13.417968 58.410156-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.410156 136.769532 147.796875 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.386718.253906 21.738281-7.980469 28.90625l-111.679688 97.941406 32.9375 145.066406c2.414063 10.667969-1.726562 21.695313-10.578125 28.09375-8.8125 6.378906-20.566406 6.914063-29.890625 1.324219l-127.464843-76.160156-127.445313 76.203125c-4.308594 2.582031-9.109375 3.859375-13.929687 3.859375zm141.375-112.871094c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.769532 1.089843-19.925782 8.621093-26.515625l105.472657-92.523438-139.542969-12.671875c-10.003906-.894531-18.667969-7.1875-22.59375-16.46875l-55.101562-129.046875-55.148438 129.066407c-3.902344 9.238281-12.5625 15.53125-22.589844 16.429687l-139.519531 12.671875 105.46875 92.519531c7.554687 6.59375 10.839844 16.769531 8.621094 26.539063l-31.082031 136.941406 120.277343-71.9375c4.328125-2.558594 9.128907-3.859375 13.972657-3.859375zm-84.585938-221.824219v.019532zm169.152344-.066406v.023438s0 0 0-.023438zm0 0"
                          fill="#ffc107"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              ))
            ) : (
              <h3 className="content__title-second">
                Вы ещё не добавили ни одного видео в избранное
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default favorites;
