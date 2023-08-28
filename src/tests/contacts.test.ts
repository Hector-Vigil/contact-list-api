import { createContact, updateContact, findUniqueContact, findAllContacts, deleteContact } from '../services/contact.service'
import { prismaMock } from '../singleton'

test('should create new contact ', async () => {
  const contact = {
    id:'123',
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '123123123',
  }

  prismaMock.contact.create.mockResolvedValue(contact)

  await expect(createContact(contact)).resolves.toEqual({
    id:'123',
    name: 'Rich',
    bio: 'hello@gmail.com',
    phone: '123123123',
  })
})

test('should update a contacts name ', async () => {
  const contact = {
    id:'123',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '123123123',
  }

  prismaMock.contact.update.mockResolvedValue(contact)

  await expect(updateContact(contact.id,contact)).resolves.toEqual({
    id:'123',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '123123123',
  })
})

test('should get a contact ', async () => {
  const contact = {
    id:'123',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '123123123',
  }

  prismaMock.contact.findUnique.mockResolvedValue(contact)

  await expect(findUniqueContact(contact.id)).resolves.toEqual({
    id:'123',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '123123123',
  })
})

test('should get all contacts ', async () => {
  const contacts = [{
      id:'123',
      name: 'Rich Smith',
      bio: 'hello@gmail.com',
      phone: '123123123',
    },
    {
      id:'124',
      name: 'Rich Smith',
      bio: 'hello@gmail.com',
      phone: '123123123',
    }]

  prismaMock.contact.findMany.mockResolvedValue(contacts)

  await expect(findAllContacts()).resolves.toEqual([{
    id:'123',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '123123123',
  },
  {
    id:'124',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '123123123',
  }])
})

test('should remove a contact ', async () => {
  const contact = {
      id:'123',
      name: 'Rich Smith',
      bio: 'hello@gmail.com',
      phone: '123123123',
    }

  prismaMock.contact.delete.mockResolvedValue(contact)

  await expect(deleteContact(contact.id)).resolves.toEqual({
    id:'123',
    name: 'Rich Smith',
    bio: 'hello@gmail.com',
    phone: '123123123',
  })
})





