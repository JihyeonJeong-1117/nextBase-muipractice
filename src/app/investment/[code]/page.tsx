interface InvestmentCodePageProps {
  params: {
    code: string;
  };
}

export default function InvestmentCodePage({
  params,
}: InvestmentCodePageProps) {
  return (
    <div>
      <h1>투자 상세 페이지</h1>
      <p>URL: /investment/{params.code}</p>
      <p>투자 코드: {params.code}</p>
    </div>
  );
}
