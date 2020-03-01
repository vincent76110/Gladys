import { Text } from 'preact-i18n';
import { Link } from 'preact-router/match';

const CreateAccountGladysGateway = ({ children, ...props }) => (
  <div>
    <div>
      <Link href="/signup" class="btn btn-secondary btn-sm">
        <Text id="global.backButton" />
      </Link>
    </div>
    <p
      style={{
        marginTop: '30px'
      }}
    >
      <Text id="global.workInProgress" />
    </p>
  </div>
);

export default CreateAccountGladysGateway;
