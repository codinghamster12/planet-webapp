import React, { useRef, useState } from 'react';
import MapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import ProjectSnippet from '../components/ProjectSnippet';
import styles from '../styles/MapboxMap.module.scss';

export default function MapboxMap(props) {
  let mapContainer = useRef(null);
  const { projects } = props;
  const [popupData, setPopupData] = useState({ show: false });

  const [viewport, setViewPort] = useState({
    width: '100%',
    height: 'calc(100% - 60px)',
    latitude: -28.5,
    longitude: 36.96,
    zoom: 2,
  });

  const _onViewportChange = (view) => setViewPort({ ...view });

  return (
    <div>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={props.mapboxToken}
        mapStyle="mapbox://styles/sagararl/ckdfyrsw80y3a1il9eqpecoc7"
        onViewportChange={_onViewportChange}
        scrollZoom={false}
        style={{
          position: 'absolute',
          top: '60px',
        }}
        onClick={() => setPopupData({ ...popupData, show: false })}
      >
        {projects.map((project, index) => (
          <Marker
            key={index}
            latitude={project.geometry.coordinates[1]}
            longitude={project.geometry.coordinates[0]}
            offsetLeft={5}
            offsetTop={-16}
            style={{ left: '28px' }}
          >
            <div
              className={styles.marker}
              onMouseOver={(e) => {
                setPopupData({
                  show: true,
                  lat: project.geometry.coordinates[1],
                  long: project.geometry.coordinates[0],
                  project: project,
                });
              }}
            >
              {/* <img
                src="https://cdn-app.plant-for-the-planet.org/media/maps/pet_p.svg"
                className={styles.markerType}
              /> */}
            </div>
          </Marker>
        ))}
        {popupData.show && (
          <Popup
            latitude={popupData.lat}
            longitude={popupData.long}
            closeButton={false}
            closeOnClick={false}
            onClose={() => setPopupData({ ...popupData, show: false })}
            anchor="bottom"
            dynamicPosition={false}
            offsetTop={20}
            tipSize={0}
          >
            <ProjectSnippet
              key={popupData.project.properties.id}
              project={popupData.project}
            />
          </Popup>
        )}
        <div className={styles.mapNavigation}>
          <NavigationControl />
        </div>
      </MapGL>
    </div>
  );
}
