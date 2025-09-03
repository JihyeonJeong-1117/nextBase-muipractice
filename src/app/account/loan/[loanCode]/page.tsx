interface AccountLoanDetailPageProps {
  params: {
    loanCode: string;
  };
}

export default function AccountLoanDetailPage({
  params,
}: AccountLoanDetailPageProps) {
  return (
    <div>
      <h1>계정 대출 상세 페이지</h1>
      <p>URL: /account/loan/{params.loanCode}</p>
      <p>대출 코드: {params.loanCode}</p>
    </div>
  );
}
