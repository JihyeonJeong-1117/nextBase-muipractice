interface AccountLoanApplicationDetailPageProps {
  params: {
    loanCode: string;
  };
}

export default function AccountLoanApplicationDetailPage({ params }: AccountLoanApplicationDetailPageProps) {
  return (
    <div>
      <h1>계정 대출 신청 상세 페이지</h1>
      <p>URL: /account/loan/application/{params.loanCode}</p>
      <p>대출 코드: {params.loanCode}</p>
    </div>
  );
}
