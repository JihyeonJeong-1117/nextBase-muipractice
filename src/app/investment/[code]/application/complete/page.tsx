interface InvestmentApplicationCompletePageProps {
  params: {
    code: string;
  };
}

export default function InvestmentApplicationCompletePage({
  params,
}: InvestmentApplicationCompletePageProps) {
  return (
    <div>
      <h1>투자 신청 완료 페이지</h1>
      <p>URL: /investment/{params.code}/application/complete</p>
      <p>투자 코드: {params.code}</p>
    </div>
  );
}
