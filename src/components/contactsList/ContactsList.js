import React, { Component } from 'react';
import './ContactsList.css';

import ContactsListItem from '../contactsListItem/ContactsListItem';
import ContactsListForm from '../contactsListForm/ContactsListForm';

export class ContactsList extends Component {
    state = {
        contacts: [
            {
                id: 1,
                age: 33,
                name: 'Кирилл',
                surname: 'Хорьков',
                phone: '1-770-736-8031 56442',
            },
            {
                id: 2,
                age: 33,
                name: 'Андрей',
                surname: 'Кириченко',
                phone: '010-692-6593 09125',
            },
            {
                id: 3,
                age: 33,
                name: 'Анна',
                surname: 'Сусанина',
                phone: '1-463-123-4447',
            },
            {
                id: 4,
                age: 33,
                name: 'Денис',
                surname: 'Барских',
                phone: '493-170-9623 x156',
            },
            
        ],
        isFormVisible: false,
    };

    onDelete = (contactId) => {
        this.setState({
            contacts: this.state.contacts.filter(({ id }) => id !== contactId),
        });
    };

    showForm = () => {
        this.setState({
            isFormVisible: true,
        });
    };

    hideForm = () => {
        this.setState({
            isFormVisible: false,
        });
    };

    onFormSave = (contact) => {
        contact.id = Date.now();

        this.setState({
            contacts: [...this.state.contacts, contact],
        });

        this.hideForm();
    };

    render() {
        return (
            <table className="contacts-list">
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Возраст</th>
                        <th>Телефон</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map((contact) => (
                        <ContactsListItem
                            contact={contact}
                            key={contact.id}
                            onDelete={this.onDelete}
                        ></ContactsListItem>
                    ))}
                </tbody>
                <tfoot>
                    {this.state.isFormVisible ? (
                        <ContactsListForm
                            onSave={this.onFormSave}
                            onCancel={this.hideForm}
                            initialName="Bob "
                        ></ContactsListForm>
                    ) : (
                        <tr>
                            <td colSpan="5">
                                <button onClick={this.showForm}>
                                    Добавить
                                </button>
                            </td>
                        </tr>
                    )}
                </tfoot>
            </table>
        );
    }
}

export default ContactsList;
