interface InvestmentTestPageProps {
  params: {
    code: string;
  };
}

export default function InvestmentTestPage({
  params,
}: InvestmentTestPageProps) {
  return (
    <div>
      <h1>투자 테스트 페이지</h1>
      <p>URL: /investment/{params.code}/test</p>
      <p>투자 코드: {params.code}</p>
    </div>
  );
}
