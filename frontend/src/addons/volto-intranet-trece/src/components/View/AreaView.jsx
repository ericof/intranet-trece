/**
 * AreaView view component.
 * @module components/View/AreaView
 */
import React from 'react';
import PropTypes from 'prop-types';
import { List, Table } from 'semantic-ui-react';
import { Icon, UniversalLink } from '@plone/volto/components';
import houseSVG from '@plone/volto/icons/home.svg';
import personSVG from '@plone/volto/icons/user.svg';

/**
 * AreaView view component class.
 * @function AreaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const AreaView = (props) => {
  const { content } = props;

  return (
    <div id="page-document" className="ui container viewwrapper area-view">
      <header>
        <h1 className="documentFirstHeading">{content.title}</h1>
      </header>
      <div>
        <p className="description documentDescription">{content.description}</p>
      </div>
      <div>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Contato</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Tipo de E-mail</Table.Cell>
              <Table.Cell singleLine>
                {content.tipo_email ? (
                  <span>{content.tipo_email.title}</span>
                ) : (
                  ''
                )}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>E-mail</Table.Cell>
              <Table.Cell singleLine>
                {content.email ? (
                  <a href={`mailto: ${content.email}`}>{content.email}</a>
                ) : (
                  ''
                )}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Ramal</Table.Cell>
              <Table.Cell singleLine>
                {content.ramal ? content.ramal : '-'}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <h2>Sub-Áreas</h2>
      <List>
        {content.items &&
          content.items.map(function (area, i) {
            return (
              <List.Item key={i}>
                <Icon name={houseSVG} size="24px" />
                <List.Content>
                  <List.Header>
                    <UniversalLink href={area['@id']}>
                      {area.title}
                    </UniversalLink>
                  </List.Header>
                  <List.Description>{area.description}</List.Description>
                </List.Content>
              </List.Item>
            );
          })}
      </List>
      <h2>Pessoas</h2>
      <List>
        {content.pessoas &&
          content.pessoas.map(function (pessoa, i) {
            return (
              <List.Item key={i}>
                <Icon name={personSVG} size="24px" />
                <List.Content>
                  <List.Header>
                    <UniversalLink href={pessoa['@id']}>
                      {pessoa.title}
                    </UniversalLink>
                  </List.Header>
                  <List.Description>{pessoa.description}</List.Description>
                </List.Content>
              </List.Item>
            );
          })}
      </List>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
AreaView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string,
    ramal: PropTypes.string,
    tipo_email: PropTypes.shape({
      title: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired,
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        '@id': PropTypes.string.isRequired,
      }),
    ),
    pessoas: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        '@id': PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default AreaView;
