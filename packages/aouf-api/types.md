# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Category](#category)
    * [Offer](#offer)
    * [PublicUser](#publicuser)
    * [User](#user)
    * [Viewer](#viewer)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [ID](#id)
    * [Int](#int)
    * [String](#string)
  * [Interfaces](#interfaces)
    * [Node](#node)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#node">Node</a></td>
<td>

Fetches an object given its ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of an object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>viewer</strong></td>
<td valign="top"><a href="#viewer">Viewer</a>!</td>
<td>

The current user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offer</strong></td>
<td valign="top"><a href="#offer">Offer</a>!</td>
<td>

Offer corresponding to an ID

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">offerId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The offer’s ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>offerList</strong></td>
<td valign="top">[<a href="#offer">Offer</a>!]!</td>
<td>

List of offers

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">offset</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Offset number

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

Max number of elements

</td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>createOffer</strong></td>
<td valign="top"><a href="#offer">Offer</a>!</td>
<td>

Create an offer

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">categoryId</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

ID of the offer’s category

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Offer’s title

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">description</td>
<td valign="top"><a href="#string">String</a></td>
<td>

Offer’s description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createDislodgedSignupToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Create a signup token for a dislodged person

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userName</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s user name

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s email

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s phone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>signin</strong></td>
<td valign="top"><a href="#viewer">Viewer</a>!</td>
<td>

Signin the viewer

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s email

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s password

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>signout</strong></td>
<td valign="top"><a href="#viewer">Viewer</a>!</td>
<td>

Signout the viewer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dislodgedSignup</strong></td>
<td valign="top"><a href="#publicuser">PublicUser</a>!</td>
<td>

Signup the viewer as dislodged

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">token</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s signup token

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s password

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>volunteerSignup</strong></td>
<td valign="top"><a href="#publicuser">PublicUser</a>!</td>
<td>

Signup the viewer as volunteer

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">userName</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s user name

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s email

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

User’s password

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">phone</td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s phone

</td>
</tr>
</tbody>
</table>

## Objects

### Category

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of an object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Category’s name

</td>
</tr>
</tbody>
</table>

### Offer

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of an object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAvailable</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If the offer is available

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Offer’s title

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Offer’s description

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#category">Category</a>!</td>
<td>

Offer’s category

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#publicuser">PublicUser</a>!</td>
<td>

The user who made the offer

</td>
</tr>
</tbody>
</table>

### PublicUser

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of an object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAdmin</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If the user is an admin

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDislodged</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If the user is currently dislodged

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isVolunteer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If the user is a volunteer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s user name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s gender

</td>
</tr>
</tbody>
</table>

### User

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of an object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isAdmin</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If the user is an admin

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isDislodged</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If the user is currently dislodged

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isVolunteer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

If the user is a volunteer

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s user name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>firstName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s first name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>lastName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s last name

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s gender

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s phone

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>address</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User’s address

</td>
</tr>
</tbody>
</table>

### Viewer

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The ID of an object

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

The spectator’s user if authenticated

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.


## Interfaces


### Node

An object with an ID

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The id of the object.

</td>
</tr>
</tbody>
</table>
