import { createContact, updateContact, findUniqueContact, findAllContacts, deleteContact } from '../services/contact.service'
import { prismaMock } from '../singleton';
import AWS from 'aws-sdk';

jest.mock('aws-sdk', () => {
  let instance = {
    upload: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  };
  return { S3: jest.fn(() => instance) };
});


describe("setup for s3.upload testing", () => {
  let testS3: any;
  beforeEach(() => {
    testS3 = new AWS.S3();
    testS3.promise.mockReturnValueOnce({ Bucket: 'contacts-list-app-images' });
  })

  test('returns expected upload value', async () => {
    let params = {};
    let result = await testS3.upload(params).promise();
    expect(result).toEqual({ Bucket: 'contacts-list-app-images' });
    expect(result.Bucket).toBe("contacts-list-app-images")
  });
});



const contact = {
  id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd0',
  name: 'Rich',
  bio: 'hello@gmail.com',
  phone: '1231231231',
  photoUrl: null,
}

const contactCreate = {
  name: 'Rich',
  bio: 'hello@gmail.com',
  phone: '1231231231',
  photoUrl: null,
}

const contacts = [{
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null,
  },
  {
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd0',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null,
  }
]


test('should create new contact ', async () => {
  prismaMock.contact.create.mockResolvedValue(contact)

  await expect(createContact(contactCreate)).resolves.toEqual({
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd0',
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  })
})

test('should update a contacts name ', async () => {
  prismaMock.contact.update.mockResolvedValue(contact)

  await expect(updateContact(contact.id,contact)).resolves.toEqual({
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd0',
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null,
  })
})

test('should get a contact ', async () => {
  prismaMock.contact.findUnique.mockResolvedValue(contact)

  await expect(findUniqueContact(contact.id)).resolves.toEqual({
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd0',
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null,
  })
})

test('should get all contacts ', async () => {
  prismaMock.contact.findMany.mockResolvedValue(contacts)

  await expect(findAllContacts()).resolves.toEqual([{
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null,
  },
  {
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd0',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null,
  }])
})

test('should remove a contact ', async () => {
  prismaMock.contact.delete.mockResolvedValue(contact)

  await expect(deleteContact(contact.id)).resolves.toEqual({
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd0',
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null,
  })
})
