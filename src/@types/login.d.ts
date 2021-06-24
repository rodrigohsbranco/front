export {};
declare global {
  namespace Login {
    interface TokenLogin {
      // expire: number;
      token: string;
      // refresh_token: string;
    }

    interface TokenClarify {
      header: {
        alg: string;
      };
      body: {
        iss: string;
        id_entity: string;
        scope: string;
        scope_entity_id: string;
        grant: string;
        iat: number;
        exp: number;
      };
      signature: string;
    }

    interface TokenValid {
      isValid: {
        iat: number;
        exp: number;
        sub: string;
      };
    }

    interface Credentials {
      //   scope: string;
      //   scopeEntityId: string | (string | null)[];
      login: string;
      password: string;
    }

    interface UserEmail {
      email: string;
    }
  }
}
