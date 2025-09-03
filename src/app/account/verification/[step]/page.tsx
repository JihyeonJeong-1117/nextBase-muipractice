interface AccountVerificationStepPageProps {
  params: {
    step: string;
  };
}

export default function AccountVerificationStepPage({ params }: AccountVerificationStepPageProps) {
  return (
    <div>
      <h1>계정 본인인증 단계 페이지</h1>
      <p>URL: /account/verification/{params.step}</p>
      <p>인증 단계: {params.step}</p>
    </div>
  );
}
