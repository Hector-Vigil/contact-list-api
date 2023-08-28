import { createContact, updateContact, findUniqueContact, findAllContacts, deleteContact } from '../services/contact.service'
import { prismaMock } from '../singleton'

test('should create new contact ', async () => {
  const contact = {
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  }
  
  const contactCreate = {
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '1231231231',
  }

  prismaMock.contact.create.mockResolvedValue(contact)

  await expect(createContact(contactCreate)).resolves.toEqual({
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  })
})

test('should update a contacts name ', async () => {
  const contact = {
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null,
  }


  const contactUpdate = {
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
  }

  prismaMock.contact.update.mockResolvedValue(contact)

  await expect(updateContact(contactUpdate.id,contactUpdate)).resolves.toEqual({
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  })
})

test('should get a contact ', async () => {
  const contact = {
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  }

  prismaMock.contact.findUnique.mockResolvedValue(contact)

  await expect(findUniqueContact(contact.id)).resolves.toEqual({
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  })
})

test('should get all contacts ', async () => {
  const contacts = [{
      id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
      name: 'Rich Smith',
      bio: 'hello@gmail.com',
      phone: '1231231231',
      photoUrl: null
    },
    {
      id:'124',
      name: 'Rich Smith',
      bio: 'hello@gmail.com',
      phone: '1231231231',
      photoUrl: null
    }]

  prismaMock.contact.findMany.mockResolvedValue(contacts)

  await expect(findAllContacts()).resolves.toEqual([{
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  },
  {
    id:'124',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  }])
})

test('should remove a contact ', async () => {
  const contact = {
      id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
      name: 'Rich Smith',
      bio: 'hello@gmail.com',
      phone: '1231231231',
      photoUrl: null
    }

  prismaMock.contact.delete.mockResolvedValue(contact)

  await expect(deleteContact(contact.id)).resolves.toEqual({
    id:'3eb91df3-e2a6-4721-a70c-1312d0bd8fd9',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '1231231231',
    photoUrl: null
  })
})





