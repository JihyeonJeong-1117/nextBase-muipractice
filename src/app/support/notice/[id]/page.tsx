interface SupportNoticeDetailPageProps {
  params: {
    id: string;
  };
}

export default function SupportNoticeDetailPage({ params }: SupportNoticeDetailPageProps) {
  return (
    <div>
      <h1>공지사항 상세 페이지</h1>
      <p>URL: /support/notice/{params.id}</p>
      <p>공지 ID: {params.id}</p>
    </div>
  );
}
