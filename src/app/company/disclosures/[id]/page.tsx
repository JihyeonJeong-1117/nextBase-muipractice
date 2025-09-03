interface CompanyDisclosureDetailPageProps {
  params: {
    id: string;
  };
}

export default function CompanyDisclosureDetailPage({ params }: CompanyDisclosureDetailPageProps) {
  return (
    <div>
      <h1>회사 공시 상세 페이지</h1>
      <p>URL: /company/disclosures/{params.id}</p>
      <p>공시 ID: {params.id}</p>
    </div>
  );
}
