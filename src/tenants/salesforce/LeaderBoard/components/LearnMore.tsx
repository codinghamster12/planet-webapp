import { Col, Row } from 'react-bootstrap';
import styles from './../LeaderBoard.module.scss';

export default function LearnMore() {
  return (
    <Row className={styles.learnMoreSectionRow}>
      <Col xs={12} md={6} className={styles.learnMoreSection}>
        <img
          className={styles.learnMoreTreeImage}
          src={'/tenants/salesforce/images/YellowBGTree.png'}
        />
        <img
          className={styles.learnMoreImage}
          src={'/tenants/salesforce/images/GiantTree.png'}
        />
      </Col>
      <Col xs={12} md={6} className={styles.learnMoreSectionText}>
        <p className={styles.learnMoreSectionTextHeader}>
          We're commited to the planet.
        </p>
        <p className={styles.learnMoreSectionTextPara}>
          We believe business is one of the greatest platforms for change. We
          commit to creating a sustainable, low-carbon future for all. That
          means reducing emissions, as well as protecting and improving carbon
          sinks, like forests.
          <br />
          <br />
          Climate change disproportionately affects the most disadvantaged and
          vulnerable populations, exacerbating existing economic and racial
          inequalities. It’s critical that we take bold steps now.
        </p>
        {/* <button className={styles.buttonStyle}>Learn More</button> */}
        <div className={styles.learnMoreSectionOverlay}></div>
      </Col>
    </Row>
  );
}
