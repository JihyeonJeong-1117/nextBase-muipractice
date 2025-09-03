interface SupportFaqDetailPageProps {
  params: {
    id: string;
  };
}

export default function SupportFaqDetailPage({ params }: SupportFaqDetailPageProps) {
  return (
    <div>
      <h1>자주 묻는 질문 상세 페이지</h1>
      <p>URL: /support/faq/{params.id}</p>
      <p>FAQ ID: {params.id}</p>
    </div>
  );
}
