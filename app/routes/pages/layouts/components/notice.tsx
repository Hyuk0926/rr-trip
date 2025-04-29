export interface Props {
  notices: {
    content: string;
  }[];
}

const handleClick = (
  e: React.MouseEvent<HTMLButtonElement>,
  index: number,
  notices: { content: string }[],
) => {
  e.preventDefault(); // 알람창을 꺼도 페이지가 위로 안 올라감
  alert(notices[index].content);
};

const activeCard = (id: string) => {
  const cardList = document.querySelectorAll('.card');
  cardList.forEach((card) => {
    card.classList.remove('active-card');
  });

  const card = document.getElementById(id);
  if (card) {
    card.classList.add('active-card');
  }
};

const NoticeSection = ({ notices }: Props) => {
  return (
    <aside className="notice container">
      <h2>공지사항</h2>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>
            <button
              className="notice-item"
              onClick={(e) => {
                handleClick(e, index, notices);
                activeCard(`card-${index}`);
              }}
            >
              {notice.content}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NoticeSection;
