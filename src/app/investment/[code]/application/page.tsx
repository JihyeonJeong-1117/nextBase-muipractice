interface InvestmentApplicationPageProps {
  params: {
    code: string;
  };
}

export default function InvestmentApplicationPage({
  params,
}: InvestmentApplicationPageProps) {
  return (
    <div>
      <h1>투자 신청 페이지</h1>
      <p>URL: /investment/{params.code}/application</p>
      <p>투자 코드: {params.code}</p>
    </div>
  );
}
