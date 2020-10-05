import { hash } from 'bcryptjs';
import IHashprovider from '../models/IHashProvider';

class FakeHashProvider implements IHashprovider {
  public async gerenetaHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export default FakeHashProvider;
