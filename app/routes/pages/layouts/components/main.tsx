import ImageSection from './image-section';
import type { Props as NoticeProps } from './notice';
import NoticeSection from './notice';
import type { Props as RecommendSectionProps } from './recommend-container';
import RecommendContainer from './recommend-container';

interface Props {
  reservations: RecommendSectionProps['reservations'];
  notices: NoticeProps['notices'];
}

const Main = ({ reservations, notices }: Props) => {
  return (
    <div>
      <ImageSection />
      <RecommendContainer reservations={reservations} />
      <NoticeSection notices={notices} />
    </div>
  );
};

export default Main;
