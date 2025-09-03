interface AccountInvestmentInfoDetailPageProps {
  params: {
    investmentCode: string;
  };
}

export default function AccountInvestmentInfoDetailPage({ params }: AccountInvestmentInfoDetailPageProps) {
  return (
    <div>
      <h1>계정 투자 정보 상세 페이지</h1>
      <p>URL: /account/investmentInfo/{params.investmentCode}</p>
      <p>투자 코드: {params.investmentCode}</p>
    </div>
  );
}
