interface MultipleInvestmentInfoPageProps {
  params: {
    groupId: string;
  };
}

export default function MultipleInvestmentInfoPage({ params }: MultipleInvestmentInfoPageProps) {
  return (
    <div>
      <h1>복수 투자 정보 페이지</h1>
      <p>URL: /multiple/investment/info/{params.groupId}</p>
      <p>그룹 ID: {params.groupId}</p>
    </div>
  );
}
