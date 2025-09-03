interface AccountPetitionDetailPageProps {
  params: {
    id: string;
  };
}

export default function AccountPetitionDetailPage({ params }: AccountPetitionDetailPageProps) {
  return (
    <div>
      <h1>계정 청원 상세 페이지</h1>
      <p>URL: /account/petition/{params.id}</p>
      <p>청원 ID: {params.id}</p>
    </div>
  );
}
